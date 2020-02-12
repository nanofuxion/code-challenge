import * as uuid from 'uuid/v4';

export const UserSchema: any = {
    email: {
        allowNull: false,
        type: 'STRING',
        unique: true,
    },
    enabled: {
        allowNull: false,
        defaultValue: true,
        type: 'BOOLEAN',
    },
    firstName: {
        allowNull: false,
        type: 'STRING',
    },
    id: {
        allowNull: false,
        defaultValue: () => uuid(),
        primaryKey: true,
        type: 'UUID',
    },
    lastName: {
        allowNull: false,
        type: 'STRING',
    },
    password: {
        type: 'STRING',
    },
};
export class UserModel {
    public readonly createdAt!: Date;
    public email!: string;
    public enabled!: boolean;
    public firstName!: string;
    public readonly id!: string;
    public lastName!: string;
    public password!: string;
    public readonly updatedAt!: Date;
}
