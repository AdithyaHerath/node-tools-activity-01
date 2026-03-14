const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// GET request - show form
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    background-color: #E6D6C3; /* Custom Background */
                    color: #333333; /* Default text color */
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background-color: #FFF7ED; /* Custom card background */
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255,122,47,0.1); /* Subtle orange shadow */
                    text-align: center;
                    width: 400px;
                    border: 1px solid #FFA65C; /* Accent border */
                }
                h2 {
                    color: #FF7A2F; /* Primary Button text color */
                    font-size: 32px;
                    margin-bottom: 5px;
                    font-weight: 600;
                }
                p {
                    color: #555555; /* Slightly lighter text for paragraphs */
                    font-size: 14px;
                    margin-bottom: 30px;
                }
                input {
                    width: 100%;
                    padding: 15px;
                    border-radius: 10px;
                    border: 1px solid #FFA65C; /* Accent border on inputs */
                    background-color: #ffffff; 
                    color: #333333;
                    margin-bottom: 25px;
                    box-sizing: border-box;
                    font-size: 16px;
                    transition: border-color 0.2s;
                }
                input::placeholder { color: #888888; }
                input:focus { outline: none; border-color: #FF7A2F; } /* Primary orange focus */
                button {
                    width: 100%;
                    padding: 15px;
                    border-radius: 10px;
                    border: none;
                    background-color: #FF7A2F; /* Primary button hue */
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.2s, transform 0.1s;
                }
                button:hover { background-color: #F14B2A; } /* Custom hover color */
                button:active { transform: scale(0.98); }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>Welcome</h2>
                <p>Please enter your name to receive a greeting.</p>
                <form action="/submit" method="POST">
                    <input type="text" name="name" placeholder="Enter your name" required>
                    <button type="submit">Get Greeting</button>
                </form>
            </div>
        </body>
        </html>
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
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    background-color: #E6D6C3; /* Custom background */
                    color: #333333;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background-color: #FFF7ED; /* Custom card background */
                    padding: 60px 80px;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255,122,47,0.1);
                    text-align: center;
                    border: 1px solid #FFA65C; /* Accent border */
                }
                h1 {
                    color: #FF7A2F; /* Primary Button text */
                    font-size: 40px;
                    margin-bottom: 30px;
                    margin-top: 0;
                }
                a {
                    color: #ffffff;
                    background-color: #FF7A2F; /* Primary color button out of accent */
                    padding: 10px 20px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: bold;
                    transition: background-color 0.2s;
                    display: inline-block;
                }
                a:hover { background-color: #F14B2A; } /* Darker on hover out of explicit hover colors */
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Hello, ${userName}!</h1>
                <a href="/">Go Back</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});