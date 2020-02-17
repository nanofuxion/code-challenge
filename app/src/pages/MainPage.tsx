import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonList, IonInput, IonText, } from '@ionic/react';
import './MainPage.css';

const Tab3: React.FC = () => {
  return (
    <IonContent fullscreen>
    <IonGrid>
    <IonRow>
    <IonCol>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Code Challenge</IonCardSubtitle>
            <IonCardTitle class="ion-text-center">User Info</IonCardTitle>
          </IonCardHeader>
    
          <IonCardContent>
            <p>Signup in Here:</p>
            <form >
            <IonList lines="full" class="">
            <IonItem>
              <IonCardSubtitle class="ion-float-right">Personal Info:</IonCardSubtitle>
            </IonItem>
              <IonItem>
                <IonLabel position="stacked">First Name </IonLabel>
                <IonCardHeader>Place Holder</IonCardHeader>
              </IonItem>
    
              <IonItem>
                <IonLabel position="stacked">Last Name </IonLabel>
                <IonCardHeader>Place Holder</IonCardHeader>
              </IonItem>
              <IonItem>
              <IonCardSubtitle class="ion-float-right">Account Info:</IonCardSubtitle>
            </IonItem>
              <IonItem>
                <IonLabel position="stacked">Username </IonLabel>
                <IonCardHeader>Place Holder</IonCardHeader>
              </IonItem>
    
              <IonItem>
                <IonLabel position="stacked">Password </IonLabel>
                <IonCardHeader>Place Holder</IonCardHeader>
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

export default Tab3;
