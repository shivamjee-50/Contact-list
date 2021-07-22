module.exports.view = function(req, res){
    return res.render('form',{
        title: 'Contact List Form Submission'
    })
}

module.exports.submit = function(req, res){
    return res.redirect('../practice');
}