import express from "express";
import semverRouting from "express-semver-routing"
import bodyParser from "body-parser";

const authRouter = express.Router();
const version = semverRouting();

authRouter.use(bodyParser.json()); // to use body object in requests

//#region Login
authRouter.post('/admin/login', version('1.0.0'), (req, res, next) => {
    res.send('Login Reached');
})

//#endregion

//#region Register
authRouter.post('/admin/register', version('1.0.0'), (req, res, next) => {
    res.send("registeration reached");
})
//#endregion

//#region Logout
authRouter.post('/admin/logout', version('1.0.0'), (req, res, next) => {
    res.send("logout reached");
})
//#endregion

export default authRouter
