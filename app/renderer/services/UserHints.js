/*
 * Copyright (C) 2015-2018 CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
import { all, put, select, takeLatest, take, call, fork } from 'redux-saga/effects';
import { MAIN_SERVICE_EVENT } from './MainIpc';

export default class UserHintsService {
    store = null;

    constructor(store) {
        this.store = store || null;
    }

    bind(store, action$) {
        this.store = store;
        this.action$ = action$;
    }

    *sagas() {
        yield all([
          takeLatest(MAIN_SERVICE_EVENT, ::this._onMainServiceEvent),
        ]);
    }

    *_onMainServiceEvent({ payload }) {
        const { event, service } = payload;
        const { message, severity, type } = event;
        if (service === 'TestRunnerService' && type === 'LOG_ENTRY') {
            yield this._analyzeTestRunnerLogs(message, severity);
        }
    }

    *_analyzeTestRunnerLogs(message, severity) {
        if (message.indexOf('ECONNREFUSED') > -1 && message.indexOf('RuntimeError') > -1) {
            // get test mode 
            const testMode = yield select(state => state.test.runtimeSettings.testMode);
            if (testMode && testMode === 'mob') {
                yield this._handleAppiumServerUnavailable();
            }
            
        }
    }

    *_handleAppiumServerUnavailable() {
        if (!confirm(`Appium server is not accessible.\n\nIn order to run mobile test, you need to install and run Appium server manually.\n\nDo you want to read a tutorial on how to install and run Appium server?`)) {
            return;
        }
        yield call(services.mainIpc.call, 'ElectronService', 'shellOpenExternal', ['http://docs.oxygenhq.org/guide-mob-intro.html']);
    }
}