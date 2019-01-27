/*
 * Copyright (C) 2015-2018 CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
import Tree from '../../components/Tree';
import React from 'react';

const checkHighLightChild = (arr, searchResults) => {
  return arr.some(item => {
    return (searchResults.indexOf(item.name) > -1);
  })
}

function handleContextMenuEvent(e, node, menuName) {
  e.preventDefault();
  this.props.setActiveNode(node.path);
  this.props.showContextMenu(menuName, e);
}

function renderTreeNodes(nodes, searchResults) {  
    if (!nodes || !nodes.length || nodes.length == 0) {
      return null;
    }
    handleContextMenuEvent = handleContextMenuEvent.bind(this);
    return nodes.map(element => {
      const resolveClassName = element.name === '.emptyfile'
        ? 'hidden-node' : element.type;

      let theTitle = element.name;  
      let highLight = false;

      if (searchResults.indexOf(theTitle) > -1) {
        highLight = true;
      }

      const highLightStyle = highLight ? { backgroundColor: 'yellow' } : {};

      if (element.type === 'object') {
        theTitle = (
          <span title={ element.name } style={{ userSelect: 'none', ...highLightStyle  }} onContextMenu={ (e) => handleContextMenuEvent(e, element, 'CONTEXT_MENU_FILE_EXPLORER_FILE') }>{element.name}</span>
        );
      }
      else if (element.type === 'container') {
        theTitle = (
          <span title={ element.name } style={{ userSelect: 'none', ...highLightStyle }} onContextMenu={ (e) => handleContextMenuEvent(e, element, 'CONTEXT_MENU_FILE_EXPLORER_FOLDER') }>{element.name}</span>
        );
      }

      if (element.type === 'container') { 
        let highLightChild = false;
  
        if(element.children && element.children.length){
          const checkedHighLightChild = checkHighLightChild(element.children, searchResults);
          if(checkedHighLightChild){
            highLightChild = true;
          }
        }
        
        return (
          <Tree.TreeNode
            nodeInfo={element}
            key={element.path}
            title={theTitle}
            className={resolveClassName}
            dataRef={element}
            style={{ userSelect: 'none' }}
            isLeaf={false}
            highLightChild={highLightChild}
          >
            {element.children ? renderTreeNodes.apply(this, [element.children, searchResults]) : []}
          </Tree.TreeNode>
        );
      }

      return (
        <Tree.TreeNode
          nodeInfo={element}
          title={theTitle}
          key={element.path}
          className={resolveClassName}
          dataRef={element}
          style={{ userSelect: 'none' }}
          isLeaf={true}
        />
      );
    });
  };

  export default renderTreeNodes;
