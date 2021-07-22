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

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db.');
            return;
        }
        return res.render('home', {
            title: 'Contacts List',
            contact_list: contacts
        });
    });
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
        return res.redirect('/');
    });
};

module.exports.delete = function(req, res){
    // Get the id from query in the url
    let id = req.query.id;

    //Find the contact in the database using id and delete it
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting an object from database.');
            return;
        };
        return res.redirect('back');
    });
}