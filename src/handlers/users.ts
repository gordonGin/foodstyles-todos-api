import prisma from '../db';
import { comparePasswords, createJWT, hashPassword } from '../modules/auth';

const createNewUser = async (req, res, next) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: await hashPassword(req.body.password),
            }
        });
        const token = createJWT(user);
        res.json({ token });
    } catch (e) {
        next({...e, type: 'input'});
    };
};

const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        }
    });

    const isValid = await comparePasswords(req.body.password, user.password);
    if (!isValid) {
        res.json('Email or Password not valid');
        return;
    }
    const token = createJWT(user);
    return res.json({ token });
}
export { createNewUser, signin }
