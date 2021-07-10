async function sendSms(students, date, link)
{
    const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );
    students.forEach(student => {
        client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: student.mobile,
            body: `You have been invited to the following event on ${date}. Link - ${link+'/'+student._id}`
            });
    })
}
function sendPollSms(students, link)
{
    const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );
    students.forEach(student => {
        client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: student.mobile,
            body: `Please fill the given poll designed by your instructor - ${link}`
            });
    })
}
module.exports = {sendSms, sendPollSms}

