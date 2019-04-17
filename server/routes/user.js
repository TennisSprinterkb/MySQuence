module.exports = function(app) {
    app.post('/studForm', (req, res) => {
        console.log(req.body)
    })
 }