import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs } from 'remotedev-monitor-components';
import DiffTree from 'remotedev-inspector-monitor/lib/tabs/DiffTab';
import EnhancedStateTree from './StateTree';
import EnhancedActionTree from './ActionTree';
import { selectMonitorTab } from '../../../actions';
import RawTab from './RawTab';
import ChartTab from './ChartTab';
import VisualDiffTab from './VisualDiffTab';

class SubTabs extends Component {
  constructor(props) {
    super(props);
    this.updateTabs(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.parentTab !== this.props.parentTab) {
      this.updateTabs(nextProps);
    }
  }

  selector = () => {
    switch (this.props.parentTab) {
      case 'Action':
        return { data: this.props.action };
      case 'Diff':
        return { data: this.props.delta };
      default:
        return { data: this.props.nextState };
    }
  };

  updateTabs(props) {
    const parentTab = props.parentTab;

    if (parentTab === 'Diff') {
      this.tabs = [
        {
          name: 'Tree',
          component: DiffTree,
          selector: () => this.props,
        },
        {
          name: 'Raw',
          component: VisualDiffTab,
          selector: this.selector,
        },
      ];
      return;
    }

    this.tabs = [
      {
        name: 'Tree',
        component:
          parentTab === 'Action' ? EnhancedActionTree : EnhancedStateTree,
        selector: () => this.props,
      },
      {
        name: 'Chart',
        component: ChartTab,
        selector: this.selector,
      },
      {
        name: 'Raw',
        component: RawTab,
        selector: this.selector,
      },
    ];
  }

  render() {
    let selected = this.props.selected;
    if (selected === 'Chart' && this.props.parentTab === 'Diff')
      selected = 'Tree';

    return (
      <Tabs
        tabs={this.tabs}
        selected={selected}
        onClick={this.props.selectMonitorTab}
      />
    );
  }
}

SubTabs.propTypes = {
  selected: PropTypes.string,
  parentTab: PropTypes.string,
  selectMonitorTab: PropTypes.func.isRequired,
  action: PropTypes.object,
  delta: PropTypes.object,
  nextState: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    parentTab: state.monitor.monitorState.tabName,
    selected: state.monitor.monitorState.subTabName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectMonitorTab: bindActionCreators(selectMonitorTab, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubTabs);
