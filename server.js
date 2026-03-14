const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// GET request - show form
app.get("/", (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px;">
            <h2>Enter your name</h2>
            <form action="/submit" method="POST">
                <input type="text" name="name" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    `);
});

// POST request - receive name
app.post("/submit", (req, res) => {
    const userName = req.body.name;
    // Pass the name as a query parameter in the URL
    res.redirect(`/hello?name=${encodeURIComponent(userName)}`);
});

// GET request - display name
app.get("/hello", (req, res) => {
    // Retrieve the name from the query parameters
    const userName = req.query.name || "Guest";
    res.send(`<h1 style="text-align: center; margin-top: 50px;">Hello, ${userName}</h1>`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});