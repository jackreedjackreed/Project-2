const { response } = require("express");

document.addEventListener('DOMContentLoaded', (event) => {
    if (e) {
        console.log('DOM loaded! 🚀');
    }

    const users;
    // grab users from db
    const findUsers = (users) => {
        let userProfileID = users || '';
        if (userProfileID) {
            userProfileID = categoryString.replace(' ' , ' ');
            userProfileID = `user/${userProfileID}`;
        }

        fetch(`/api/posts/${userProfileID}`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },  
        })
          .then((response) => response.json())
          .then((data) => {
              console.log('Success in getting user:', data);
              users = data;
          }) 
    };

    // initial list of users
    findUsers();

    const insertUser = (userData) => {
        fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then(getUsers)
          .catch((err) => console.error(err));
      };
    // display a user
    const renderUser = (id) => {
        fetch(`/api/users/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(getPosts());
    };
})