var express = require("express");
var app = express();

/* Serves main page */
app.get("/", function(req, res) {
   res.sendFile( __dirname + '/dist/index.html');
});

/* Serves all the static files */
app.get(/^(.+)$/, function(req, res){
    res.sendFile( __dirname + "/dist/" + req.params[0]);
});

/* Handling 404 errors */
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.send("You shouldn't be here.");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
