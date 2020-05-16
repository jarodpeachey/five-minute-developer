/* eslint-disable import/prefer-default-export */
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const Mailchimp = require('mailchimp-api-v3');

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

exports.handler = function (event, context, callback) {
  const json = JSON.parse(event.body);

  console.log(json.email);

  const data = {};

  mailchimp
    .post('lists/7bf1f280a0/members/', {
      email_address: json.email,
      status: 'subscribed',
    })
    .then((res) => {
      callback('Succes', {
        statusCode: 200,
        body: { msg: 'Success!', data: res },
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 400,
        body: { msg: 'Error.', data: err },
      });
    });
};
