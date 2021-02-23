

const adjectives = sequelize.define ("adjectives", {

    adjective: {type: Sequelize.STRING}},
    
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }); 
    
    
    adjectives.sync();


    const nouns = sequelize.define ("nouns", {

        noun: {type: Sequelize.STRING}},
        
        {
          freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
        }); 
        
        
        nouns.sync();


        var coolName = sequelize.define ("coolName", {

            First_Name: {type: Sequelize.STRING},
            
            Last_Name: {type: Sequelize.STRING}},
            
            {
              freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
            }); 
            
            
            coolName.sync();

var randomFirst = adjectives.findAll({ order: Sequelize.literal('rand()'), limit: 1 })
var randomLast = nouns.findAll({ order: Sequelize.literal('rand()'), limit: 1 })
      
function creatingNames (adjective, noun)








