const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//XHTMP

//HTTP logger
// app.use(morgan('combined'))

//Teplate engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
      app.
      set('view engine', 'hbs');
      app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
