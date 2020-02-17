import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonPage,
} from '@ionic/react';
// import { IonApp } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends Component {
  render() {
    return (
      <Router>
        <IonApp>
          <IonPage >
            <Switch>
          <Route path="/Welcome" component={Welcome} exact={true} />
          <Route path="/Signup" component={Signup} exact={true} />
          <Route path="/MainPage" component={MainPage} />
          <Route path="/" render={() => <Redirect to="/Welcome" />} exact={true} />
          </Switch>
          </IonPage>
        </IonApp>
      </Router>
    );
  }
}

export default App;
