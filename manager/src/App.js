import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBEblobZfR4DuBEUKHnsIDKgyTqjRjSz3c",
      authDomain: "manager-5ce0d.firebaseapp.com",
      databaseURL: "https://manager-5ce0d.firebaseio.com",
      projectId: "manager-5ce0d",
      storageBucket: "manager-5ce0d.appspot.com",
      messagingSenderId: "205342091118"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
