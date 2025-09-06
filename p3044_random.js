const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define the random number generation function directly
const generateRandomNumber = (n) => {
    const randomNumber = Math.floor(Math.random() * n) + 1;
    return randomNumber;
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/:number", (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (isNaN(number) || number < 1) {
    return res.status(400).render("invalid");
  }

  const randomNumber = generateRandomNumber(number);

  res.render("number", { 
    maxNumber: number,
    randomNumber
  });
});

app.listen(3044, () => {
  console.log("Server listening on port 3044");
});