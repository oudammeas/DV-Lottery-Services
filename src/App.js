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
import Amplify, { Auth, Hub, Logger} from 'aws-amplify';
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
  const [user, updateUser] = useState(null);

  useEffect(()=> {
    checkUser();
    setAuthListener();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ', user);
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: "signedIn"}));
    } catch (err){
      // updateUser(null);
    }
  }

  async function setAuthListener(){
    
    const logger = new Logger('My-Logger');

    const listener = (data) => {

      switch (data.payload.event) {
  
          case 'signIn':
              updateFormState(() => ({ ...formState, formType: "signedIn"}));
              logger.error('user signed in'); //[ERROR] My-Logger - user signed in
              break;
          case 'signUp':
              updateFormState(() => ({ ...formState, formType: "confirmSignUp"}));
              logger.error('user signed up');
              break;
          case 'signOut':
              updateFormState(() => ({ ...formState, formType: "signUp"}));
              logger.error('user signed out');
              break;
  
      }
    }
    
    Hub.listen('auth', listener);


  }

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

        // updateFormState(() => ({ ...formState, formType: "confirmSignUp"}));

        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  };

  async function confirmSignUp() {
    try {

      const {username, authCode } = formState;

      await Auth.confirmSignUp(username, authCode);
      
      // updateFormState(() => ({ ...formState, formType: "signIn"}));

    } catch (error) {
        console.log('error confirming sign up', error);
    }
  };

  async function signIn() {
    try {
    
      const {username, password} = formState;
    
      const user = await Auth.signIn(username, password);
    
      // updateFormState(() => ({ ...formState, formType: "signedIn"}));

    } catch (error) {
        console.log('error signing in', error);
    }
  };

  async function signOut() {
    try {
        await Auth.signOut();
      // updateFormState(() => ({ ...formState, formType: "signUp"}));
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

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
                  <button onClick={() => updateFormState (()=> ({
                    ...formState, formType: "signIn"
                  }))}>Sing In</button>
                </div>
              )
            }

            {
              formType === 'signIn' && (
                <div>
                  <input name="username" onChange={onChange} placeholder="username" />
                  <input name="password" type="passowrd" onChange={onChange} placeholder="password" />
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
                  <button onClick={signOut}>Sign Out</button>
                </div>
              )
            }

          </Provider>
      </VichySugarDaddyProvider>
    </div>
  );
}

export default App;
