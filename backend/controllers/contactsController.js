const express = require('express');
const router = express.Router();

var {contacts} = require('../models/contacts');

// localhost:3000/contacts
router.get( '/', (req, res)=> {
	contacts.find( (err, docs)=>{
		if(!err){res.send(docs);}
		else{console.log("Contact documents not found : " + JSON.stringify(err, undefined, 2));}
		});	
});

router.post('/', (req, res)=> {
	var contact = new contacts ({
		name: req.body.name,
		phoneNumber: req.body.phoneNumber,
		address: req.body.address,
		gender: req.body.gender,
		shortBio: req.body.shortBio
	});	

	contact.save((err, docs)=>{
		if(!err){res.send(docs);}
		else{console.log("Contact documents not found : " + JSON.stringify(err, undefined, 2));}
	});	
});

module.exports = router;