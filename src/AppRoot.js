import React, { useEffect, useState } from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';

// import the react-native-ui-lib (wix) theme
import './theme';

import Loading from './screens/Loading';
import Main from './navigators/Main';

function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    async function bootApp() {
      // do your async work here
      // load icons
      // etc.

      // Simulate boot time
      setTimeout(() => {
        setBooted(true);
      }, 2000);
    }

    bootApp();
  }, []);

  if (!booted) {
    return <Loading />;
  }

  return (
    <NavigationNativeContainer>
      <Main />
    </NavigationNativeContainer>
  );
}

export default App;
