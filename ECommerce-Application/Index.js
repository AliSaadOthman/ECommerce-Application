// Controllers imports
import authentication from "./Controllers/Authentication.js";

// Middleware imports
import YAML from "yamljs";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import swaggerUI from "swagger-ui-express";
dotenv.config();

const PORT = 3000;

const app = express();

//#region Swagger
const swaggerDocument = YAML.load('swagger-config.yaml');
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, { explorer: true }));
//#endregion

//#region Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//#endregion

//#region routes
app.use('/', authentication);
//#endregion

app.listen(PORT, () => console.log(`Application is running on http://localhost:${PORT}`));
