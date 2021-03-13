const { data } = require("autoprefixer");
const { response } = require("express");

function allPosts (){
    fetch('/api/posts', {
        headers: {
        'Content-Type': 'application/json',
        },

    })
   .then(response => response.json())
      
    .then((data) => {
          console.log({data})
        })
        .catch((err) => console.error(err));
    };
allPosts();

 console.log("hi!")