import React from 'react';
// Style
import './App.css';
import 'rsuite/lib/styles/index.less';
import './App.less';
// Translation
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

// Provider inject into all child component
import { Provider } from 'mobx-react';

// Route
import Routes from './routes/router';
import { BrowserRouter as VichySugarDaddyProvider } from 'react-router-dom';

// Import Stores
import commonStore from './stores/commonStore';

// Set up frontend
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const stores = {
  commonStore,
};

function App() {


  return (
    <div className="App">
      <VichySugarDaddyProvider>
          <Provider {...stores}>
            <Routes />
          </Provider>
      </VichySugarDaddyProvider>
    </div>
  );
}

export default App;
