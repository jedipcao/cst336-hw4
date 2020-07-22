const express = require("express");
const faker = require('faker');

const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.html", { faker: faker });
});

app.get("/benefits", function(req, res) {
    res.render("benefits.html", { faker: faker });
});

app.get("/how", function(req, res) {
    res.render("how.html", { faker: faker });
});

app.get("/values", function(req, res) {
    res.render("values.html", { faker: faker });
});

app.get("/principle", function(req, res) {
    res.render("principle.html", { faker: faker });
});

//starting server
var envPort = process.env.PORT || 5000;
var envIP = process.env.IP || "0.0.0.0";
app.listen(envPort, envIP, function() {
    console.log("Express server is running...");
});