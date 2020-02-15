import { UserModel, UserSchema } from './users';
// import * as MongoClient from "mongodb";
import * as mongoose from "mongoose";
import User from "./Usermoschema"
import * as uuid from 'uuid/v4';

export interface IModels {
    user: UserModel;
}
export const Models = async (dbUrl: string): Promise<IModels> => {
    try {
        // TODO: Connect to chosen database, and pass model objects
        
        //connect
        //verifying env value is passing to code  
        console.log(`the db url is ${dbUrl}`);

        //mongodb future proofing for module refactor 
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);

        //connect to docker db
        mongoose.connect(dbUrl, (err: any) => {
            if(err) console.log(err.message);
            else console.log("If this loaded, successfully mongoDB from docker, Woooow.");
        });



        const models = {
            user: new UserModel(
            ),
        };

        let user = new User({
            email: models.user.email,
            enabled: models.user.enabled,
            firstName: models.user.firstName,
            id: models.user.id,
            lastName: models.user.lastName,
            password: models.user.password
        });
        user.save(
            (err: any)=>{
        if(err) console.log(err);
        else console.log(JSON.stringify(user));
        }
        );

        return models;
    } catch (err) {
        return Promise.reject(err);
    }
};
