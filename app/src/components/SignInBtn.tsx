import React from 'react';
import { Link } from "react-router-dom";
import { IonButton } from '@ionic/react';

const SignInBtn: React.FC = () => {

  return (
    <div>
    <Link to="/mainPage">
    <IonButton class="ion-float-right" >SignIn</IonButton>
    </Link>
  </div>
  );
};

export default SignInBtn;
