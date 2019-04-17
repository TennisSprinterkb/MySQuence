const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./client/server/database') 
const SequelStore = require('sequelStore');
const passport = require('./client/server/passport');
const app = express()
const port = 3001;
// Route requires
const user = require('./client/server/routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new SequelStore ({ SequelStore: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Routes
app.use('/user', user)


app.listen(port, () => console.log(`Server started on port ${port}`));