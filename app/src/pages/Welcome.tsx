import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonList, IonInput, IonText } from '@ionic/react';
import GoSignUpBtn from '../components/GoSignUpBtn';
import SignInBtn from '../components/SignInBtn';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
<IonContent fullscreen>
<IonGrid>
<IonRow>
<IonCol>
    <IonCard>
      {/* blatantly stolen stock photo from google, set width to 100%  */}
    <img src="https://parkesprintanddesign.com/wp-content/uploads/2017/07/AdobeStock_49589216-1024x731.jpeg"  className="image-width"/>
      <IonCardHeader>
        <IonCardSubtitle>Code Challenge</IonCardSubtitle>
        <IonCardTitle>Welcome</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <p>Sigin in Here:</p>
        <form >
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          <IonItem>
            <IonLabel position="stacked">Username <IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text" ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Password <IonText color="danger">*</IonText></IonLabel>
            <IonInput required type="text" ></IonInput>
          </IonItem>
          
          <IonItem >
        <div>
          {/* takes you to the logged in page once password authenticated */}
        <SignInBtn />
        </div>
          <IonGrid>
          <IonRow>
          <IonCol class="ion-float-left">
        <div>
          {/* routed signup button to welcome page here in GoSignUp.tsx */}
        <GoSignUpBtn />
        </div>
        </IonCol>
        </IonRow>
        </IonGrid>
        </IonItem>
        </IonList>
      </form>

      </IonCardContent>
    </IonCard>
    </IonCol>
    </IonRow>
    </IonGrid>
  </IonContent>
  );
};

export default Welcome;
