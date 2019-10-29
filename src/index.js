import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import mongoose from 'mongoose';

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password123@ds339968.mlab.com:39968/heroku_txwt1dj1"
mongoose.connect(MONGODB_URI);
//  process.env.MONGODB_URI  || "mongodb://localhost/mongoHeadlines"

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
