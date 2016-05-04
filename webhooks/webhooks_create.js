var paypal = require('paypal-rest-sdk');

var client_id = 'YOUR APPLICATION CLIENT ID';
var secret = 'YOUR APPLICATION SECRET';

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': client_id,
  'client_secret': secret
});

var create_webhook_json = {
    "url": "URL OF YOUR LISTENER ENDPOINT",
    "event_types": [
        {
            "name": "PAYMENT.SALE.COMPLETED"
        },
        {
            "name": "PAYMENT.SALE.DENIED"
        }
    ]
};

paypal.notification.webhook.create(create_webhook_json, function (error, webhook) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Create webhook Response");
        console.log(webhook);
    }
});
