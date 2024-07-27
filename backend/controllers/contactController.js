const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) return res.status(404).json({ error: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.sendEmail = async (req, res) => {
    const { contacts } = req.body; // Array of contact objects

    try {
        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@redpositive.in',
            subject: 'Contact Information',
            text: JSON.stringify(contacts, null, 2), // Format the contacts as a readable string
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

