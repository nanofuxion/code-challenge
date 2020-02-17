import React from 'react';
import { Link } from "react-router-dom";
import { IonButton } from '@ionic/react';

const GoSignUpBtn: React.FC = () => {

  return (
    <div>
    <Link to="/Signup">
    <IonButton class="ion-float-right" >SignUp</IonButton>
    </Link>
  </div>
  );
};

export default GoSignUpBtn;
