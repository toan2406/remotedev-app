const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  modal: {
    content: { padding: 0, bottom: 'auto' }
  },
  window: {
    width: 'auto', height: 'auto'
  },
  buttonBar: {
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: '#4F5A65',
    flexDirection: 'row',
    backgroundColor: '#353B46',
    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    minWidth: '300px'
  },
  buttonText: {
    verticalAlign: 'middle',
    marginLeft: '2px'
  },
  instances: {
    border: '1px solid #8A96A2',
    fontSize: '14px',
    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
    backgroundColor: 'rgb(79, 90, 101)',
    color: '#fff',
    width: '100%'
  }
};

export default styles;
