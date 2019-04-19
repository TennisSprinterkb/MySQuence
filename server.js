const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5');
// const session = require('express-session');
const port = 3001;
// Route requires
// const user = require('./client/server/routes/user')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.get("/getData", (req, res) => {//must have the /routeName to work with React front end.
    // console.log("hi");
    res.json({testData:'testData'})
});

app.post("/postData", (req, res) => {//must have the /routeName to work with React front end.
    console.log("Data from front end", req.body);
	let username = req.body.username;
	let password = md5(req.body.password);
	console.log(password)
	res.json({responseData:'responseTestData'})
});

app.post("/postLogin", (req, res) => {//must have the /routeName to work with React front end.
	console.log('Works!')
    console.log("Data from front end", req.body);
	let username = req.body.username;
	let password = md5(req.body.password);
	console.log(password)
	res.json({responseData:'responseTestData'})
});
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());




if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}


app.listen(port, () => console.log(`Server started on port ${port}`));