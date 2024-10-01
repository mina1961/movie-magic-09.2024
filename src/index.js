import express from "express";
import routes from "./routes.js";
import handlebarsInit from "./confic/handlebarsInit.js";
import expressInit from "./confic/expressInit.js";
import mongooseInit from "./confic/mongooseInit.js";

const app = express();

mongooseInit();
handlebarsInit(app);
expressInit(app);

app.use(routes);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000...");
})
