import React, { Component, PropTypes } from 'react';
import InspectorMonitor from 'remotedev-inspector-monitor';
import StackTraceTab from 'redux-devtools-trace-monitor';
import { DATA_TYPE_KEY } from '../../../constants/dataTypes';
import SubTabs from './SubTabs';
import TestTab from './TestTab';
import MockTab from './MockTab';
import apiCallDebugTransform from '../../../utils/apiCallDebugTransform';

const DEFAULT_TABS = [
  {
    name: 'Action',
    component: SubTabs,
  },
  {
    name: 'State',
    component: SubTabs,
  },
  {
    name: 'Diff',
    component: SubTabs,
  },
];

class InspectorWrapper extends Component {
  static update = InspectorMonitor.update;

  render() {
    const { lib, actionsById, ...rest } = this.props;
    let tabs;
    if (lib === 'redux') {
      tabs = () => [
        ...DEFAULT_TABS,
        { name: 'Mock', component: MockTab },
        { name: 'Trace', component: StackTraceTab },
        { name: 'Test', component: TestTab },
      ];
    } else {
      tabs = () => DEFAULT_TABS;
    }

    const previewActions = Object.keys(actionsById).reduce(
      (actions, id) => ({
        ...actions,
        [id]: {
          ...actionsById[id],
          action: apiCallDebugTransform(actionsById[id].action),
        },
      }),
      {},
    );

    return (
      <InspectorMonitor
        dataTypeKey={DATA_TYPE_KEY}
        shouldPersistState={false}
        invertTheme={false}
        theme="nicinabox"
        tabs={tabs}
        {...rest}
        actionsById={previewActions}
      />
    );
  }
}

InspectorWrapper.propTypes = {
  lib: PropTypes.string,
};

export default InspectorWrapper;
