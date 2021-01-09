const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'pages', 'form.html'));
    res.render('pages/form.ejs');
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    
    // let data = res.json({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName
    // });


    // res.redirect('/?display=' + data); //FIXME: Can't pass data to other view & display it
    res.render('pages/display.ejs', {first:  data.firstName, last: data.lastName });

    // var string = encodeURIComponent(data);
    // res.redirect('/?display=' + req.body);

});


// router.get('/', (req, res, next) => {
    // res.write('<html>');
    // res.write('<head><title>Hello Browser!</Title></head>');
    // res.write('<body>');
    // res.write('<h1>Welcome to my world;gkad;gkan;abd;adag!</h1>');
    // res.write('<a href="/">Home</a></br>'); // navigation to the home page. 
    // res.write('</body>');
    // res.write('</html>');
    // return res.end(); // Return so you don't execute remaining code outside of if statement
// });

module.exports = router;