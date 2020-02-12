import { IAppConfig } from '../app';
import { JWT } from '../lib/JWT';
import { IModels } from '../models';
import { User } from './user';

export interface IResolvers {
    jwt: JWT;
    user: User;
}
export const Resolvers = (configs: IAppConfig, models: IModels): IResolvers => {
    return {
        jwt: new JWT(configs.JWT),
        user: new User(models),
    };
};
