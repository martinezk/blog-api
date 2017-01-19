//imports
const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

const app = express();

//sample posts
BlogPosts.create('Tuesday Run', 'Ran 3 miles. 152 BPM', 'KM', '1/17/2017');
BlogPosts.create('Day Run', 'Ran 4 miles. 152 BPM', 'KM');