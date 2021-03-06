import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JSON5 from 'json5';
import { liftedDispatch, submitMock } from '../../../actions';
import { DEFAULT_MOCK_DATA } from '../../../reducers/mock';
import Button from '../../../components/CommonButton';
import validateMockData from '../../../utils/validateMockData';

class MockTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: JSON5.stringify(props.mockData, null, 2),
      isDirty: false,
      error: '',
    };
  }

  handleChange = e => this.setState({ value: e.target.value, isDirty: true });

  handleSubmit = () => {
    try {
      const mockData = JSON5.parse(this.state.value);
      const isValidMockData = validateMockData(mockData);

      if (!isValidMockData) throw new Error();

      this.props.submitMock(mockData);
      this.props.liftedDispatch({ type: 'APPLY_MOCK', mockData });
      this.setState({ error: '', isDirty: false });
    } catch (err) {
      this.setState({ error: 'Invalid mock data shape' });
    }
  };

  handleRemove = () =>
    this.setState(
      { value: JSON5.stringify(DEFAULT_MOCK_DATA) },
      this.handleSubmit,
    );

  render() {
    const { value, error } = this.state;
    return (
      <Wrapper>
        <ButtonWrapper>
          <Button onClick={this.handleSubmit}>Apply mock</Button>
          <Button onClick={this.handleRemove}>Remove mock</Button>
        </ButtonWrapper>
        <Error>{error}</Error>
        <TextArea value={value} onChange={this.handleChange} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Error = styled.small`
  color: red;
`;

const TextArea = styled.textarea`
  flex: 1;
  display: block;
  padding: 5px 10px;
  margin: 0;
  border: solid thin rgba(190, 190, 190, 0.5);
  font-family: monospace;
  font-size: 13px;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

function mapStateToProps(state) {
  return {
    mockData: state.mock ? state.mock.data : DEFAULT_MOCK_DATA,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    liftedDispatch: bindActionCreators(liftedDispatch, dispatch),
    submitMock: bindActionCreators(submitMock, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MockTab);
