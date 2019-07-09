const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://admin:admin123@ds231537.mlab.com:31537/bridgeit';

const setHeaders = res => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}

const isEmpty = req => {
    return req.body.length === 0 || req.body.length === undefined
}

const mongo_connect = () => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(MONGO_URL, { useNewUrlParser: true })
}

const useMiddleware = app => {
    app.use(require('cors')())
    app.use(require('helmet')())
    app.use(require('morgan')('dev'))
    app.use(require('body-parser').json())
}

module.exports = {setHeaders, isEmpty, mongo_connect, useMiddleware}