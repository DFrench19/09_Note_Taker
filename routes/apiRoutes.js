const path = require("path");

module.exports = function (app, fs) {

    const db = require("./db/db.json");


    app.get("/api/notes/", function (req, res) {
        note_data.push(req.body);
        res.json(true);
    });

    app.get("/api/notes/", function (req, res) {
        res.json(note_data);
    });

    app.get("/api/notes/", function(req, res){
        note_data.length = 0;
        res.json({ok: true});
    });
}