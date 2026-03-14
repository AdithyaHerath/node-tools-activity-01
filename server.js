const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let userName = "";

// GET request - show form
app.get("/", (req, res) => {
    res.send(`
        <h2>Enter your name</h2>
        <form action="/submit" method="POST">
            <input type="text" name="name" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// POST request - receive name
app.post("/submit", (req, res) => {
    userName = req.body.name;
    res.redirect("/hello");
});

// GET request - display name
app.get("/hello", (req, res) => {
    res.send(`<h1>Hello, ${userName}</h1>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});