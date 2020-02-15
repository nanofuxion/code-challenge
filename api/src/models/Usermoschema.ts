import * as mongoose from "mongoose";
import * as uuid from 'uuid/v4';

export const UserMoSchema = new mongoose.Schema({
    email: {
        allowNull: false,
        type:String,
        unique: true,
    },
    enabled: {
        allowNull: false,
        defaultValue: true,
        type:Boolean,
    },
    firstName: {
        allowNull: false,
        type:String,
    },
    id: {
        allowNull: false,
        defaultValue: () => uuid(),
        primaryKey: true,
        type: typeof(uuid()), //set type to type of uuid to stop catastrophic errer cause by type mismatch.
    },
    lastName: {
        allowNull: false,
        type:String,
    },
    password: {
        type:String,
    },
});

const User = mongoose.model('User', UserMoSchema);
export default User;