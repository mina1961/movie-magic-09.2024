import exspress from "express";
import handlebars from "express-handlebars";

import homeController from "./controllers/homeController.js";

const app = exspress();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(exspress.static('public'));

app.use(homeController);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000...");
})
