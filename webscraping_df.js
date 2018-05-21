'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const request = require('request');
const cheerio = require('cheerio');
const rp = require('request-promise');
const rpn = require('request-promise-native');
const url = 'http://www.ecommerceguru.it/case-study/';

app.intent('scrpwb', (conv) => {
  let response = 'That\'s a bloody test 2.0';
  let final = 'x-54';
  conv.add('Processing...');

  prova_promise().then((message) => {
    conv.add(message);
    return Promise.resolve();
  }).catch((err) => {
    console.log(err);
    conv.add("Uh Oh, something happened");
    return Promise.resolve();
  })
});

function prova_promise(){
return rpn(url).then((body) => {
    let $= cheerio.load(body);
    $('div.post-c-wrap > h4.title > a').each((i, el) => {
      let x = $(el).text().trim();
      data.push(x);
      console.log('cheerio loaded correctly');
    })
    return Promise.resolve(data.join(',\n'));
  }).catch((err) => {
    return Promise.reject(err);
  })
}

exports.sillyNameMaker = functions.https.onRequest(app);
exports.prova_promise = prova_promise;
