module.exports.index=function(req,res){
    res.render('index', { title: 'HomeScout' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'HomeScout' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'HomeScout' });
   };