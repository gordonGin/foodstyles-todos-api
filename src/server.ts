import express from 'express';
import router from './router';
import morgan from 'morgan';
var cors = require('cors')

import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/users';
import { errorHandling } from './modules/error';

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, _res) => {
    throw new Error('hello');
})

app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('/signin', signin);

app.use(errorHandling);

export default app;