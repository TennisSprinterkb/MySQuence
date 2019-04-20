const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5');
const db = require("./models");
const routes = require("./routes");
// const user = require("./routes/api/user-api-routes")
// const sequence = require("./routes/api/sequence-api-routes")
// Route requires

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/getData", (req, res) => {//must have the /routeName to work with React front end.
    // console.log("hi");
    res.json({testData:'testData'})
});

app.post("/postData", (req, res) => {//must have the /routeName to work with React front end.
  
	let username = req.body.username;
	let password = md5(req.body.password);

	res.json({responseData:'responseTestData'})
});

app.post("/postLogin", (req, res) => {//must have the /routeName to work with React front end.

	let username = req.body.username;
	let password = md5(req.body.password);
	res.json({ responseData: 'responseTestData' })
});


app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

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