var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

var indexRouter = require('./routes/index');
var AsiakasRouter = require('./routes/Asiakas');
var KorttiRouter = require('./routes/Kortti');
var TilitapahtumatRouter = require('./routes/Tilitapahtumat');
var CreditTiliRouter = require('./routes/CreditTili');
var DebitTiliRouter = require('./routes/DebitTili');
var Asiakas_has_CreditTiliRouter = require('./routes/Asiakas_has_CreditTili');
var Asiakas_has_DebitTiliRouter = require('./routes/Asiakas_has_DebitTili');
var login = require('./routes/login');

var app = express();

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Asiakas', AsiakasRouter);
app.use('/Kortti', KorttiRouter);
app.use('/Tilitapahtumat', TilitapahtumatRouter);
app.use('/CreditTili', CreditTiliRouter);
app.use('/DebitTili', DebitTiliRouter);
app.use('/Asiakas_has_CreditTili', Asiakas_has_CreditTiliRouter);
app.use('/Asiakas_has_DebitTili', Asiakas_has_DebitTiliRouter);
app.use('/login', loginRouter);

module.exports = app;
