import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from '../src/components/contacts/Contacts';
import Header from '../src/components/layout/Header';
import About from '../src/components/pages/About';
import NotFound from '../src/components/pages/NotFound';
import AddContact from '../src/components/contacts/AddContact';
import EditContact from '../src/components/contacts/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
