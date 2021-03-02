const { response } = require("express");

document.addEventListener('DOMContentLoaded', () => {
    if (e) {
        console.log('DOM loaded! 🚀');
    }

    // display a user
    const renderUser = (user) => {
      userId = user || '';
      if (userId) {
          userId = `/?user${userId}`;
      }

      fetch(`/api/users${userId}`, (req, res) => {
      db.User.findOne({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        where: {
          id: req.params.id
        },
      });
     })
     .then((dbUser) => res.json(dbUser))
     .then((data) => {
        posts = data;
        console.log('Success in getting users:', data);
        if (!data || !data.length) {
          displayEmpty(user);
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error('Error:', error));

    };
    // Create HTML rows for the blog container
    const initializeRows = () => {
        blogContainer.innerHTML = '';
        const postsToAdd = [];

        posts.forEach((post) => postsToAdd.push(createNewCard(post)));
        postsToAdd.forEach((post) => blogContainer.append(post));
    };
    

      // Front end call to DELETE a User
      const deleteUser = (id) => {
      fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        }).then(renderUser());
        };


    const createNewCard = (card) => {
        console.log('createNewCard -> card', card);
    
        const formattedDate = new Date(card.createdAt).toLocaleDateString();
    
        const newUserCard = document.createElement('div');
        newUserCard.classList.add('card');
    
        const newUserCardHeading = document.createElement('div');
        newUserCardHeading.classList.add('card-header');
    
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete', 'btn', 'btn-danger');
        deleteBtn.addEventListener('click', handleUserDelete);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit', 'btn', 'btn-info');
        editButton.addEventListener('click', handleUserEdit);

        const newUserName = document.createElement('h5');
        const newUserDate = document.createElement('small');
        const newUserFirst_LastName = document.createdElment('h2');
        const newUserFavoriteBook = document.createElement('h2');
        const newUserLocation = document.createElement('h2');
        const newUserClub = document.createElement('h3');
        
        
        newUserName.textContent = `${userId}`;
        newUserName.style.float = 'right';
        newUserName.style.color = 'blue';
        newUserName.style.marginTop = '-10px';

        const newUserCardBody = document.createElement('div');
        newUserCardBody.classList.add('card-body');

        const newCardBody = document.createElement('li')
        newCardBody = post.body;
        newUserDate.textContent = `(${formattedDate})`;
        newUserFirst_LastName.textContent = `${user.first.name}, ${user.last.name}`;
        newUserFavoriteBook.textContent = `${favorite.book}`;
        newUserLocation.textContent = `${user.location}`;
        newUserClub.textContent = `${user.club}`;
        newUserName.append(newUserDate);
        newUserCardHeading.append(deleteBtn);
        newUserCardHeading.append(editButton);
        newUserCardHeading.append(newUserName);
        newUserCardBody.append(newCardBody);
        newUserCard.append(newUserName);
        newUserCard.append(newUserCardBody);
        newUserCard.setAttribute('data-post', JSON.stringify(post));

        console.log('createNewUser -> newUserCard', newUserCard);

        return newUserCard;
    };
    
    // Handle when user delete button clicked
    const handleUserDelete = (e) => {
      const currentUser = JSON.parse(
        e.target.parentElement.parentElement.dataset.post
      );

        deleteUser(currentUser.id);
    };

    // Handle when user edit button clicked
    const handleUserEdit = (e) => {
      const currentUser = JSON.parse(
        e.target.parentElement.parentElement.dataset.post
      );

      window.location.href = `/users?user_id=${currentUser.id}`;
    };
})

