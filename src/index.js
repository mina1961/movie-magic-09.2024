import express from "express";

import routes from "./routes.js";

import handelbarsInit from "../cofic/handelbarsInit.js";
import expressInit from "../cofic/expressInit.js";

const app = express();

handelbarsInit(app);
expressInit(app);

app.use(routes);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000...");
})
