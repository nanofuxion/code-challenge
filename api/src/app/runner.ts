import * as moment from 'moment-timezone';
import { Models } from '../models';
import { Resolvers } from '../resolvers';
import { App, IApp, IAppConfig } from './';

/**
 * App Runner Configuration
 */
export const AppRunner = async (dbUrl: string, configs: IAppConfig): Promise<IApp> => {
    const models = await Models(dbUrl);
    
    /**
     * Set default timezone for moment
     */
    moment.tz.setDefault(configs.Timezone);
    
    /**
     * Create resolver functions
     */
    const resolvers = Resolvers(configs, models);
    
    /**
     * Start Application as an API
     */
    return App(configs, resolvers);
};
