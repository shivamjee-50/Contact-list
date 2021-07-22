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
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.phone);
    contactList.push(req.body);

    return res.redirect('/');
};