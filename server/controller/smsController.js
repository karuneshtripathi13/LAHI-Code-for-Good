async function sendSms(students, message)
{
    const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );
    await client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: '+918250299834',
    body: `You have been invited to the following event - ${message}`
    });
}
module.exports = sendSms

