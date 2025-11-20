import express from 'express';
import { middleware } from './middleware';
import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from './config';
import { JWT_SECRET } from '@repo/backend-common/config';
import {CreateUserSchema} from "@repo/common/types";


const app = express();

app.post('/signup', (req, res) => {
   const data = CreateUserSchema.safeParse(req.body);

   if(!data.success){
        return res.json({
            message: "incorrect inputs"
        })
   }
})

app.post('/signin', (req, res) => {
    const userid = 1;
    const token = jwt.sign({ userid }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
})

app.post('/room', middleware, (req, res) => {
    //db call
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
