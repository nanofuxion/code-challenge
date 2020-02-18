import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonList, IonInput, IonText, } from '@ionic/react';
import GoSignUpBtn from '../components/GoSignUpBtn';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <IonContent fullscreen>
      {/* uuse tailwind width constrants for screens larger than mobile*/}
      <IonGrid className="max-w-lg mx-auto my-12">
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Code Challenge</IonCardSubtitle>
                <IonCardTitle class="ion-text-center">Signup</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <p>Signup in Here:</p>
                <form >
                  <IonList lines="full" class="">
                    <IonItem>
                      <IonCardSubtitle class="ion-float-right">Personal Info:</IonCardSubtitle>
                    </IonItem>
                    <IonItem>
                      <IonLabel position="stacked">First Name <IonText color="danger">*</IonText></IonLabel>
                      <IonInput required type="text" ></IonInput>
                    </IonItem>

                    <IonItem>
                      <IonLabel position="stacked">Last Name <IonText color="danger">*</IonText></IonLabel>
                      <IonInput required type="text" ></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonCardSubtitle class="ion-float-right">Account Info:</IonCardSubtitle>
                    </IonItem>
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
                        <IonButton>SignUP</IonButton>
                      </div>
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

export default Signup;
