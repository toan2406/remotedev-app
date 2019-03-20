import React from 'react';
import ActionTree from 'remotedev-inspector-monitor/lib/tabs/ActionTab';

export default ({ action, ...props }) => (
  <ActionTree
    {...props}
    action={{
      ...action,
      type: action._type_,
    }}
  />
);
