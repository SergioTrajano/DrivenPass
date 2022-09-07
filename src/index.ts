import express from "express";
import cors from "cors";
import "express-async-errors";
import doteenv from "dotenv";

import routes from "./routes/routesIntex";
import errorHandler from "./middlewares/errorMIddleware";

doteenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 4000;

server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}!`);
});
