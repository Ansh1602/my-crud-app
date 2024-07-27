const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);
router.post('/contacts/send-email', contactController.sendEmail);

module.exports = router;
