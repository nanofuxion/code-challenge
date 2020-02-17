import { Resolver } from '../lib/Resolver';
import { IModels } from '../models';
import { UserModel } from '../models/users';

import * as mongoose from "mongoose"
import { userLogin } from '../controllers/userController';

export class User extends Resolver<IModels> {
    /**
     * Get user by username
     */
    public async getByUsername(username: string): Promise<UserModel | null> {
        
        return null;
    }
    
    /**
     * Get user by id and validates that they are authorized
     */
    public async isAuthorized(id: string, verbose: boolean = true): Promise<UserModel> {
        const defaultMessage = 'Your username/password combination is incorrect';
        
        // TODO: Find user by id
        let user: UserModel = userLogin(id); 

        if (!user) {
            return Promise.reject<any>({
                message: verbose ? 'There was no user record found' : defaultMessage,
                statusCode: 404,
            });
        }
        if (!user.enabled) {
            return Promise.reject<any>({
                message: verbose ? 'Your user has been disabled' : defaultMessage,
                statusCode: 404,
            });
        }
        if (!user.password) {
            return Promise.reject<any>({
                message: verbose ? 'Your password has expired' : defaultMessage,
                statusCode: 404,
            });
        }
        return user;
    }
}
