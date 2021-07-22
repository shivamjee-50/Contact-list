const Contact = require("../models/contact");

contactList = [
    {
        name: "Arpan",
        phone: "1234567890"
    },
    {
        name: "Tony Stark",
        phone: "9876543210"
    },
    {
        name: "xyz",
        phone: "5678943210"
    }
]

module.exports.home = function(req, res) {
    return res.render('home', {
        title: 'Contacts List',
        contact_list: contactList
    })
};

module.exports.view = function(req, res){
    return res.render('form',{
        title: 'Contact List Form Submission'
    })
};

module.exports.submit = function(req, res){
    // contactList.push(req.body);

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('Error in creating a contact.');
        }

        console.log('********', newContact);
        return res.redirect('back');
    })
};

module.exports.delete = function(req, res){
    let phone = req.query;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex == -1){
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');
}