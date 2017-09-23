module.exports = function(app) {


    // serves voting/index page
    app.route("/")
        .get(function(req, res) {
            res.sendFile(process.cwd() + "/public/index.html")
        })  
}
