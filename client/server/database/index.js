//Connect to sql database
const sequelize = require('sequelize')
sequelize.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mysql://tuicywrge6l0jq98:y3swh3r1cm1hi5c9@o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/y6twr9r6pp2ood42' 

sequelize.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to SQL');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to SQL: ')
         console.log(err);
         
        }
  );


module.exports = sequelize.connection