import React, {useState, useEffect} from 'react';
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
import Amplify, { Auth, Hub} from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const stores = {
  commonStore,
};

const initialFormState = {
  username: '', passowrd: '', email:'', authCode: '', formType: 'signUp'

};

function App() {

  const [formState, updateFormState] = useState(initialFormState);
  
  function onChange(e) {
    e.persist();
    updateFormState(()=> ({ ...formState, [e.target.name]: e.target.value}));
  }

  const {formType} = formState;
  
  async function signUp() {
    try {
        const {username, email, password } = formState;

        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                // phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });

        updateFormState(() => ({ ...formState, formType: "confirmSignUp"}));

        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  };

  async function confirmSignUp() {
    try {

      const {username, authCode } = formState;

      await Auth.confirmSignUp(username, authCode);
      
      updateFormState(() => ({ ...formState, formType: "SignIn"}));

    } catch (error) {
        console.log('error confirming sign up', error);
    }
  };

  async function signIn() {
    try {
    
      const {username, password} = formState;
    
      const user = await Auth.signIn(username, password);
    
      updateFormState(() => ({ ...formState, formType: "SignedIn"}));

    } catch (error) {
        console.log('error signing in', error);
    }
  };


  return (
    <div className="App">
      <VichySugarDaddyProvider>
          <Provider {...stores}>
            <Routes />
            {
              formType === 'signUp' && (
                <div>
                  <input name="username" onChange={onChange} placeholder="username" />
                  <input name="password" type="passowrd" onChange={onChange} placeholder="password" />
                  <input name="email" type="email" onChange={onChange} placeholder="email" />
                  <button onClick={signUp}>Sing Up</button>

                </div>
              )
            }

            {
              formType === 'signIn' && (
                <div>
                  <input name="username" onChange={onChange} placeholder="username" />
                  <input name="password" type="passowrd" onChange={onChange} placeholder="password" />
                  <input name="email" type="email" onChange={onChange} placeholder="email" />
                  <button onClick={signIn}>Sing In</button>

                </div>
              )
            }

            {
              formType === 'confirmSignUp' && (
                <div>
                  <input name="authCode" onChange={onChange} placeholder="Confirmation Code" />
                  <button onClick={confirmSignUp}>Confirm Signup</button>

                </div>
              )
            }
            {
              formType === 'signedIn' && (
                <div>
                  <h1>Hello world, welcome user.</h1>
                </div>
              )
            }

          </Provider>
      </VichySugarDaddyProvider>
    </div>
  );
}

export default App;
