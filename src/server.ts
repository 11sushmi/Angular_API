import express from "express";
import AngularRouter from "./routers/user.router";
const app = express();
const port = 3000;

app.use('/api/user', AngularRouter);

app.listen(port);







