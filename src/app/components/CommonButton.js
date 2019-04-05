import styled from 'styled-components';

const disabledStyle = `
  opacity: 0.5;
  pointer-events: none;
`;

const Button = styled.button`
  max-width: 200px;
  padding: 5px 10px;
  margin: 0;
  margin-right: 10px;
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

  ${({ disabled }) => (disabled ? disabledStyle : '')}
`;

export default Button;
