const express = require("express");
const path = require("path")
const fs = require("fs")

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({exteneded: ture}));
app.use(express.json());
app.use(express.static("./public/"));

require("./routes/apiRoutes")(app, fs);
require("./routes/htmlRoutes")(app, fs);

app.listen(PORT, function() {
    console.log("listening on LocalHost: " + PORT);
})