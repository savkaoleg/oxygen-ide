const po = {
    url: [
        "https://cartonet.azurewebsites.net/pages/home1",
        "https://cartonet.azurewebsites.net/pages/home2",
        "https://cartonet.azurewebsites.net/pages/home3",
        "https://cartonet.azurewebsites.net/pages/home4",
        "https://cartonet.azurewebsites.net/pages/home5",
    ],
    loginPage: {
        passwordFld: "//input[@type='password']",
        loginBtn: "//span[contains(text(),'Enter')]"
    },
    homePage: {
        last7ActiveLbl: "//div[contains(@class,'active')]//p[text()='Last 7 Days']",
        disabledLbls: {
            thisWeekDisabled: "//div[contains(@class,'disabled')]//p[text()='This Week']",
            thisMonthDisabled: "//div[contains(@class,'disabled')]//p[text()='This Month']",
            last30Disabled: "//div[contains(@class,'disabled')]//p[text()='Last 30 Days']",
            ytdDisabled: "//div[contains(@class,'disabled')]//p[text()='YTD']",
            allDisabled: "//div[contains(@class,'disabled')]//p[text()='All']"
        },
        casesHeader: "//div[text()='Cases']",
        labUtilHeader: "//div[text()='Lab Utilization']",
        efficiencyHeader: "//div[text()='Efficiency']",
        catheterUsageHeader: "//div[text()='Catheter Usage']",
        casePortfolioHeader: "//div[text()='Case Portfolio']",

    },
    navBar: {
        userInfo:{
            userNameLbl: "//h1[@class='user-name']",
            institutionLbl: "//h2[@class='hospital-name']",
        },
        logoImages: {
            biosenseLogo: "//img[contains(@src,'Logo_w')]",
            cartonetLogo: "//img[@src='assets/images/Logo.svg']",
        },
        institutionRadioBtn:"//mat-radio-button[contains(@class,'checked')]",
        homeBtn: "//a//span[contains(text(),'Home')]", 
        casesBtn: "//a//span[contains(text(),'Cases')]",
        statisticsBtn: "//a//span[contains(text(),'Statistics')]",
        analysticsBtn: "//a//span[contains(text(),'Analytics')]",
        researchBtn: "//a//span[contains(text(),'Research')]",
        labUtilBtn: "//a//span[contains(text(),'Lab Utilization')]",
        labUtilActive: "//span[contains(@class,'active') and contains (text(),'Lab Utilization')]",
        efficiencyBtn: "//a//span[contains(text(),'Efficiency')]",
        casePortfolioBtn: "//a//span[contains(text(),'Case Portfolio')]",
        catheterUsageBtn: "//a//span[contains(text(),'Catheter Usage')]",
        ablationBtn: "//a//span[contains(text(),'Ablation')]",
        researchListBtn: "//a//span[contains(text(),'Research List')]",
        researchParticipationBtn: "//a//span[contains(text(),'Research Participation')]",
    },
    casesPage: {
        patientNameSearch: "//input[contains(@id,'mat-input')]",
        filtersBtn: "//label[text()='Filters']",
        firstResultDate: "//tbody/tr[2]/td[1]",
        procedureType: "//tbody/tr[2]/td[2]",
        firstPhysicianName:"//tbody/tr[2]/td[3]",
        firstPatientName:"//tbody/tr[2]/td[4]",
    },
    filtersScreen: {
        physicianSelectAll:"(//div[text()=' (Select All) '])[1]",
        arrythmiaSelectAll:"(//div[text()=' (Select All) '])[2]",
        researchSelectAll: "(//div[text()=' (Select All) '])[3]",
        applyFiltersBtn:"//button/span[text()='Apply Filter']",
        firstOptionCheck:"//mat-list-option[@id='filterPopupPhys0']//mat-pseudo-checkbox",
    },
    casePortfolioPage: {
        casesPortfolioTitle: "//h2[text()='Arrhythmia Distribution']",
        vtOtherBox: "//span[contains(text(),'VT Other')]/../div",
        vtOtherDisabled: "//span[contains(text(),'VT Other')]/../../div[contains(@class,'disable')]",
        arryth1Legend: "//*[@id='casePortfolioLegend3']",
        arryth2Legend:"//*[@id='casePortfolioLegend4']",
        arryth3Legend:"//*[@id='casePortfolioLegend5']",
        arrRatio: "(//span[contains(@class,'stacked-value align-self-center')])",
        casesAmount: "//label[contains(@class,'cases-count')]/span",

    },
    efficiencyPage: {
        efficiencyTitle: "//h2[text()='Case Duration Statistics']",
    },
    diagramDates: {
        mainChart: "//div[contains(@id,'highcharts')]",
        fromDate: "(//div[contains(@class,'ng-star-inserted')]/span)[2]",
        middleDate: "(//div[contains(@class,'ng-star-inserted')]/span)[4]",
        lastDate: "(//div[contains(@class,'ng-star-inserted')]/span)[6]"
    },
    labUtilPage: {
        labUtilTitle: "//h2[text()='Lab Utilization']",
    },
    catheterUsagePage: {
        catheterUsageTitle: "//h2[text()='Catheter Usage']",
        table: "//div[contains(@id,'highcharts')]",
    },
    ablationPage: {
        ablationTitle: "//div[contains(@class,'type-btn')]",
        abTimeBtn: "//button[@id='ablationMenuTime']",
        yAxisAbTime: "(//span[contains(text(),' Min')])[1]",
        abSessionBtn: "//button[@id='ablationMenuSessions']",
        yAxisAbSess: "(//span[contains(text(),'14')])[1]",
    },
    researchListPage: {
        addNewResearch: "//button[@id='researchListAddResearch']",
        automaticManualBtn: "//mat-slide-toggle[@id='mat-slide-toggle-4']/label",
        numberingRangeLbl: "//p[text()='Numbering Range']",
        researchName: "(//input[contains(@id,'mat-input')])[1]",
        researchManager: "(//input[contains(@id,'mat-input')])[2]",
        rangeFrom: "(//input[contains(@id,'mat-input')])[3]",
        rangeTo: "(//input[contains(@id,'mat-input')])[4]",

    }
};

module.exports = po;