const db=require("../models");module.exports=e=>{e.get("/api/posts",(e,s)=>{const d={};e.query.user_id&&(d.UserId=e.query.user_id),db.Post.findAll({where:d,include:[db.User]}).then(e=>s.json(e))}),e.get("/api/posts/:id",(e,s)=>{db.Post.findOne({where:{id:e.params.id},include:[db.User]}).then(e=>s.json(e))}),e.post("/api/posts",(e,s)=>{console.log(e.body),db.Post.create(e.body).then(e=>s.json(e))}),e.delete("/api/posts/:id",(e,s)=>{db.Post.destroy({where:{id:e.params.id}}).then(e=>s.json(e))}),e.put("/api/posts",(e,s)=>{db.Post.update(e.body,{where:{id:e.body.id}}).then(e=>s.json(e))})};