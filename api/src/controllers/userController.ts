import {Request, Response} from "express";
import { UserModel } from '../models/users';
import * as mongoose from "mongoose"
import UserAdd from "../models/Usermoschema";
// MVC model - V

let dbUrl: any = process.env.DB_URL;


///ooooof

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//connect to docker db
mongoose.connect(dbUrl, (err: any) => {
    if(err) console.log(err.message);
    else console.log("If this loaded, successfully mongoDB from docker, Woooow.");
});



// const models = {
//     user: new UserModel(
//     ),
// };

// let user = new UserAdd({
//     id: models.user.id,
//     email: models.user.email,
//     enabled: models.user.enabled,
//     firstName: models.user.firstName,
//     lastName: models.user.lastName,
//     password: models.user.password
// });
// user.save(
//     (err: any, value: any)=>{
// if(err) console.log(err);
// else console.log(JSON.stringify(value));
// }
// );

///oofers




// created a user login model
export let userLogin = (id: string) => {

    let theUser: UserModel= {
        createdAt: new Date(),
        email: "",
        enabled: false,
        firstName: '',
        id: '',
        lastName: '',
        password: '',
        updatedAt: new Date(),
    };
    
    UserAdd.findById(id,
        (err: any, theuser: UserModel)=>{
    
    if(err) console.log(err);
    else {console.log(theuser);
    theUser = theuser;
    }
    }
    );
    
    const user: UserModel = {
        createdAt: theUser.createdAt,
        email: theUser.email,
        enabled: false,
        firstName: theUser.firstName,
        id: theUser.id,
        lastName: theUser.lastName,
        password: theUser.password,
        updatedAt: theUser.updatedAt,
    };
return user;

}


// created a user login model
export let userSignup = (id: string) => {

    let theUser: UserModel= {
        createdAt: new Date(),
        email: "",
        enabled: false,
        firstName: '',
        id: '',
        lastName: '',
        password: '',
        updatedAt: new Date(),
    };
    
    UserAdd.findById(id,
        (err: any, theuser: UserModel)=>{
    
    if(err) console.log(err);
    else {console.log(theuser);
    theUser = theuser;
    }
    }
    );
    
    const user: UserModel = {
        createdAt: theUser.createdAt,
        email: theUser.email,
        enabled: false,
        firstName: theUser.firstName,
        id: theUser.id,
        lastName: theUser.lastName,
        password: theUser.password,
        updatedAt: theUser.updatedAt,
    };
return user;

}
