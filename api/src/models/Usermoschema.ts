import * as mongoose from "mongoose";
import * as uuid from 'uuid/v4';

//creates template
export interface  IUser extends mongoose.Document{
    createdAt: Date;
    email: string;
    enabled: boolean;
    firstName: string;
    id: string;
    lastName: string;
    password: string;
    updatedAt: Date;
}

export const UserMoSchema = new mongoose.Schema({
    createdAt: {
        allowNull: false,
        type:Date,
    },
    id: {
    allowNull: false,
    defaultValue: () => uuid(),
    primaryKey: true,
    type: typeof(uuid()), //set type to type of uuid to stop catastrophic errer cause by type mismatch.
    unique: true,
    },
    email: {
        allowNull: false,
        type:String,
        // unique: true,
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
    lastName: {
        allowNull: false,
        type:String,
    },
    password: {
        type:String,
    },
    updatedAt: {
        allowNull: false,
        type:Date,
    },
});

const UserAdd = mongoose.model<IUser>('User', UserMoSchema);
export default UserAdd;