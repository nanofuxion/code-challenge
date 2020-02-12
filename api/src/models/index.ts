import { UserModel, UserSchema } from './users';

export interface IModels {
    user: UserModel;
}
export const Models = async (dbUrl: string): Promise<IModels> => {
    try {
        // TODO: Connect to chosen database, and pass model objects
        const models = {
            user: new UserModel(),
        };
        return models;
    } catch (err) {
        return Promise.reject(err);
    }
};
