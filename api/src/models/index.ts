import { UserModel, UserSchema } from './users';
// import * as MongoClient from "mongodb";
import * as mongoose from "mongoose";
import UserAdd from "./Usermoschema"


export interface IModels {
    user: UserModel;
}
export const Models = async (dbUrl: string): Promise<IModels> => {
    try {
        // TODO: Connect to chosen database, and pass model objects
        
        //connect
        //mongodb future proofing for module refactor 
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useUnifiedTopology', true);

        //connect to docker db
        mongoose.connect(dbUrl, (err: any) => {
            if(err) console.log(err.message);
            else console.log("If this loaded, successfully mongoDB from docker, Woooow.");
        });

        let user = UserAdd.find(
            (err: any, docs: any) => {
                if (err) console.log(err);
                else {
                    console.log("these are the current docs in mongo ⬇️ below");
                    console.log(docs);
                }
                return docs;
            }
        );

        

        const models = {
            user: new UserModel(
                
            ),
        };

        // models.user.email = user.

        return models;
    } catch (err) {
        return Promise.reject(err);
    }
};
