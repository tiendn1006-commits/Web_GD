const express = require('express');
const router = express.Router();
const { createContact, getAllContacts, updateContactStatus } = require('../controllers/contactController');

// Create new contact request
router.post('/', createContact);

// Get all contact requests
router.get('/', getAllContacts);

// Update contact status
router.patch('/:id', updateContactStatus);

module.exports = router;
