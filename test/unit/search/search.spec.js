import SearchRow from '../../../app/renderer/containers/ObjectRepository/SearchRow';
import { shallow, mount } from 'enzyme'
import React from 'react'

const sampleTree = [
  {
    name: "url",
    type: "object"
  },
  {
    name: "researchListPage",
    type: "container",
    children: [
      {
        name: "addNewResearch",
        type: "object"
      },
      {
        name: "researchListPage",
        type: "object"
      },
      {
        name: "automaticManualBtn",
        type: "object"
      }
    ]
  }
]

const setSearchResults = (searchResults) => {
  return searchResults;
}

describe('Search', () => {
  it('Renders correctly without any props', () => {
    const Component = mount(<SearchRow />)
    expect(Component).toMatchSnapshot()
  })

  it('Renders correctly with props', () => {
    const Component = mount(<SearchRow 
      setSearchResults={ setSearchResults }
      tree={ sampleTree }
    />)
    
    expect(Component).toMatchSnapshot()
    expect(Component.find('div').hasClass('search-row')).toEqual(true);
    expect(Component.find('input').hasClass('ant-input')).toEqual(true);
  })

  it('Search input work fine', () => {
    const Component = mount(<SearchRow 
      setSearchResults={ setSearchResults }
      tree={ sampleTree }
    />)

    const input = Component.find({ name: 'search' }).first()

    input.simulate('change', {target: {name: 'search', value: 'url'}});

    const inputAfterClick = Component.find({ name: 'search' }).first()
    expect(inputAfterClick.props().value).toEqual('url');
  })


  it('Search input clean and counter exist', () => {
    const Component = mount(<SearchRow 
      setSearchResults={ setSearchResults }
      tree={ sampleTree }
    />)

    const input = Component.find({ name: 'search' }).first()

    input.simulate('change', {target: {name: 'search', value: 'url'}});

    Component.update();
    
    expect(Component.find('.clear').length).toEqual(1);
    expect(Component.find('.text').length).toEqual(1);
  })

  
  it('Search input clean work fine', () => {
    const Component = mount(<SearchRow 
      setSearchResults={ setSearchResults }
      tree={ sampleTree }
    />)

    const input = Component.find({ name: 'search' }).first()

    input.simulate('change', {target: {name: 'search', value: 'url'}});

    Component.update();

    const clear = Component.find('.clear').first();
    clear.simulate('click');

    Component.update();
    
    expect(Component.find('.clear').length).toEqual(0);
    expect(Component.find('.text').length).toEqual(0);
  })
})