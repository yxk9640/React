const express = require('express');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');


const app = express();

//require returns function with immedialtely 
// callback function with app pbject

require('./routes/authRoutes')(app);


// log(keyz.googleCliendID);




// ---- V1 ------
// app.get('/', (req, res) => {
//     res.send({
//         para: 'hello, good to meet you'
//     });

// });
// ---- V1 ------

const PORT = process.env.PORT || 3000;
app.listen(PORT);