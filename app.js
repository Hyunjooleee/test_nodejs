const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))


const path = require('path');
const router = express.Router();

router.get('/sub01', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub_stylesheets/sub01.html'));
    //__dirname : It will resolve to your project folder.
    });

router.get('/sub02', function (req, res) {
res.sendFile(path.join(__dirname + '/sub_stylesheets/sub02.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/sub03', function (req, res) {
res.sendFile(path.join(__dirname + '/sub_stylesheets/sub03.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/sub04', function (req, res) {
    res.sendFile(path.join(__dirname + '/sub_stylesheets/sub04.html'));
    //__dirname : It will resolve to your project folder.
    });

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.use(express.static('public'))