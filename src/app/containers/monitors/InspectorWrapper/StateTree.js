import React, { Component } from 'react';
import styled from 'styled-components';
import StateTree from 'remotedev-inspector-monitor/lib/tabs/StateTab';
import bfs from '../../../utils/bfs';

class EnhancedStateTree extends Component {
  state = { searchValue: '', error: '' };

  onChangeSearchValue = e => this.setState({ searchValue: e.target.value });

  resetState = () => this.setState({ searchValue: '', error: '' });

  onSearch = () => {
    const {
      nextState,
      updateMonitorState,
      monitorState: { inspectedStatePath },
    } = this.props;
    const { searchValue } = this.state;

    const searchPath = bfs(nextState, searchValue).slice(1);

    this.resetState();

    if (!searchPath.length && searchValue)
      return this.setState({ error: 'Not found' });

    if (!inspectedStatePath.length)
      return updateMonitorState({
        inspectedStatePath: searchPath,
      });

    return updateMonitorState({
      inspectedStatePath: [...inspectedStatePath, ...searchPath.slice(1)],
    });
  };

  onReset = () => {
    this.resetState();
    this.props.updateMonitorState({ inspectedStatePath: [] });
  };

  render() {
    const {
      monitorState: { inspectedStatePath },
    } = this.props;
    const { searchValue, error } = this.state;

    const inspectedKey = lastOr(inspectedStatePath, 'root');

    return (
      <div>
        <SearchForm>
          <div>
            <Input
              placeholder="Key..."
              value={searchValue}
              onChange={this.onChangeSearchValue}
            />
            <Error>{error}</Error>
          </div>
          <Button onClick={this.onSearch}>Search from {inspectedKey}</Button>
          <Button onClick={this.onReset}>Reset</Button>
        </SearchForm>

        <StateTree {...this.props} />
      </div>
    );
  }
}

const SearchForm = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  padding: 5px 10px;
  margin: 0;
  margin-right: 10px;
  border: solid thin rgba(190, 190, 190, 0.5);
  font-size: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const Error = styled.small`
  color: red;
`;

const Button = styled.button`
  max-width: 200px;
  padding: 5px 10px;
  margin: 0;
  margin-right: 5px;
  border: solid thin rgba(190, 190, 190, 0.5);
  font-size: 12px;
  color: white;
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: rgba(190, 190, 190, 0.2);
  }
`;

const lastOr = (array, defaultValue) => {
  const lastElement = array[array.length - 1];
  return typeof lastElement === 'undefined' ? defaultValue : lastElement;
};

export default EnhancedStateTree;
