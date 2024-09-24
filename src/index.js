import exspress from "express";

const app = exspress();

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(5000, ()=> {
    console.log("Server is running on http://localhost:5000...");
})
