const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const md5 = require('md5');
const db = require("./models");
const routes = require("./routes");
const morgan = require("morgan");
// const user = require("./routes/api/user-api-routes")
// const sequence = require("./routes/api/sequence-api-routes")
// Route requires

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(morgan("dev"));


// parse application/json


if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//app.use(user);
app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3001;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
});