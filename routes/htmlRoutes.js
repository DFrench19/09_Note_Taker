const path = require("path");

module.exports = function (app, fs) {


    app.get('/notes', function (res, req) {
        res.sendFile(path.join(_dirname, '../public/notes.html'))
    })

    app.get('/', function (res, req) {
        res.sendFile(path.join(_dirname, '../public/index.html'))
    })


}