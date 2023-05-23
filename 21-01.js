// npm i express
// npm i express-handlebars

const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('express-handlebars').create({
   extname: '.hbs', helpers: {
      refuse: () => {
         return `<button type="reset" onclick="window.location.href='./'">Отказаться</button>`;
      }
   }
});
const numbersRouter = require('./routes/numbers').numbersRouter

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', numbersRouter)

app.listen(PORT, () => console.log('http://localhost:3000/*'))