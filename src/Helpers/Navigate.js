import * as React from 'react';

import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  setTimeout(() => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }, 10);
}
