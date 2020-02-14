import { UserModel, UserSchema } from './users';
import * as MongoClient from "mongodb";
import * as mongoose from "mongoose";

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
        mongoose.connect(dbUrl, (e: any) => {
            if(e) console.log(e.message);
            else console.log("If this loaded, successfully mongoDB from docker, Noice.")
        });

        const models = {
            user: new UserModel(),
        };
        return models;
    } catch (err) {
        return Promise.reject(err);
    }
};
