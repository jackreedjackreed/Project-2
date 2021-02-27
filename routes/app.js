
app.get('/', async (req, res)=>{
    try{
        // Get A Noun
      const randomNoun = await  Noun.findAll({
            order: db.Sequelize.literal('rand()'),
            limit: 1
       })

       // Get an Adjective
       const randomAdjective = await Adjective.findAll({
           order: db.Sequelize.literal('rand()'),
           limit: 1
       })

       const result = {noun: randomNoun[0].noun, adjective: randomAdjective[0].adjective};

       // Send to the view
       res.render('index', {result});

    }catch(err){
        console.log(err);
    }
});


module.exports = app;