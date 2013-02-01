exports.index = function(req, res) {
    res.render('index', { title: 'RESTful Bookmarks Node.js' });
};

exports.partials = function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};