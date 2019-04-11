const express = require('express');
const app = express();

//instead of this get and api we can connect our MySQL database instead
app.get('/api/poses', (req,res) => {
    const poses = [
        {id: 1, name: 'warrior'},
        {id: 2, name: 'ninja'},
        {id: 3, name: 'plank'}
    ];
    res.json(poses);
});

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));