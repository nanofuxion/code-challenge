import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator/check';
import { isEmpty } from 'lodash';
import { Authorization, formatErrors } from '.';
import { IAppConfig } from '../app';
import { IResolvers } from '../resolvers';

export default (configs: IAppConfig, resolvers: IResolvers) => {
    const router = Router();
    
    /**
     * @api {get} /me Get logged in user
     * @apiError {Object[]} [errors] Input errors
     * @apiError {string} message General error message
     * @apiError {number} statusCode HTTP Status Code
     * @apiGroup Authentication
     * @apiHeader {String} Authorization="Bearer [token]" token
     * @apiName Get logged in user
     * @apiSampleRequest /me
     * @apiSuccess {string} id The id of the user
     * @apiSuccess {string} email The email of the user
     * @apiSuccess {boolean} enabled Whether the user is enabled
     * @apiSuccess {string} firstName The first name of the user
     * @apiSuccess {string} lastName The last name of the user
     * @apiSuccess {string} name The full name of the user
     * @apiSuccess {Object} role The role of the user
     * @apiSuccess {string} role.id The id of the role
     * @apiSuccess {boolean} role.enabled Whether the role is enabled
     * @apiSuccess {string} role.name The name of the role
     * @apiVersion 0.0.1
     */
    router.get('/me', Authorization(resolvers), (req: Request, res: Response) => res.json(req.user));
    
    /**
     * @api {post} /login Authenticate user
     * @apiError {Object[]} [errors] Input errors
     * @apiError {string} errors.username Error message for username
     * @apiError {string} errors.password Error message for password
     * @apiError {string} message General error message
     * @apiError {number} statusCode HTTP Status Code
     * @apiGroup Authentication
     * @apiName Authenticate user
     * @apiParam (body) {string} password Password of the user
     * @apiParam (body) {string} username Username of the user
     * @apiSampleRequest /login
     * @apiSuccess {string} token The token to acknowledge the user
     * @apiVersion 0.0.1
     */
    router.post('/login', [
        body('password').trim().escape().not().isEmpty().withMessage('The password field is required'),
        body('password').custom((value) => value.length >= 8).withMessage(`The password field must be at least 8 charcters`),
        body('username').trim().escape().not().isEmpty().withMessage('The username field is required'),
        body('username').isEmail().withMessage('The username field should be a valid email address'),
    ], async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req).formatWith(formatErrors).mapped();
        if (!isEmpty(errors)) {
            return next({
                errors,
                message: '422 Unprocessable Entity',
                statusCode: 422,
            });
        }
        try {
            const user = await resolvers.user.getByUsername(req.body.username);
            // Check if the record was found
            if (!user) {
                return next({
                    message: 'Your username/password combination is incorrect',
                    statusCode: 403,
                });
            }
            await resolvers.user.isAuthorized(user.id, false);
            if (bcrypt.compareSync(req.body.password, user.password)) {
                return res.json({
                    token: resolvers.jwt.createToken(user.id),
                });
            }
            return next({
                message: 'Your username/password combination is incorrect',
                statusCode: 403,
            });
        } catch (err) {
            return next(err);
        }
    });


    /**
     * @api {get} /signup Authenticate user
     * @apiError {Object[]} [errors] Input errors
     * @apiError {string} errors.username Error message for username
     * @apiError {string} errors.password Error message for password
     * @apiError {string} message General error message
     * @apiError {number} statusCode HTTP Status Code
     * @apiGroup Authentication
     * @apiName Authenticate user
     * @apiParam (body) {string} password Password of the user
     * @apiParam (body) {string} username Username of the user
     * @apiSampleRequest /signup
     * @apiSuccess {string} token The token to acknowledge the user
     * @apiVersion 0.0.1
     */
    router.post('/signup', [
        body('password').trim().escape().not().isEmpty().withMessage('The password field is required'),
        body('password').custom((value) => value.length >= 8).withMessage(`The password field must be at least 8 charcters`),
        body('username').trim().escape().not().isEmpty().withMessage('The username field is required'),
        body('username').isEmail().withMessage('The username field should be a valid email address'),
    ], async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req).formatWith(formatErrors).mapped();
        if (!isEmpty(errors)) {
            return next({
                errors,
                message: '422 Unprocessable Entity',
                statusCode: 422,
            });
        }
        try {
            const user = await resolvers.user.getByUsername(req.body.username);
            // Check if the record was found
            if (!user) {
                return next({
                    message: 'Your username/password combination is incorrect',
                    statusCode: 403,
                });
            }
            await resolvers.user.isAuthorized(user.id, false);
            if (bcrypt.compareSync(req.body.password, user.password)) {
                return res.json({
                    token: resolvers.jwt.createToken(user.id),
                });
            }
            return next({
                message: 'Your username/password combination is incorrect',
                statusCode: 403,
            });
        } catch (err) {
            return next(err);
        }
    });
    
    return router;
};
