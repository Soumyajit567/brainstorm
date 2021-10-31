import express from "express";

let app = express();
let port = process.env.PORT || 4000;

app.listen(port);