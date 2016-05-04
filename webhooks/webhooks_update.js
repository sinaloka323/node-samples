var paypal = require('paypal-rest-sdk');

var client_id = 'YOUR APPLICATION CLIENT ID';
var secret = 'YOUR APPLICATION SECRET';

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': clientId,
  'client_secret': secret
});

var webhookId = "ID OF THE WEBHOOK TO UPDATE";
var webhookUpdate = [{
        "op": "replace",
        "path": "/url",
        "value": "NEW URL FOR WEBHOOK"
    },{
        "op": "replace",
        "path": "/event_types",
        "value": [{
            "name": "PAYMENT.SALE.DENIED"
        }]
    }
];

paypal.notification.webhook.replace(webhookId, webhookUpdate, function (err, res) {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log(JSON.stringify(res));
    }
});
