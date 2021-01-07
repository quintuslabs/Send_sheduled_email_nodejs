module.exports = (app) => {
    const mail = require('../controllers/note.controller.js');

    // send email Default
    app.post('/api/v1/email/send', mail.sendMail);
}
