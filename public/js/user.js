// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const userNameInput = document.getElementById('first-name, last-name');
  const favoriteBookInput = document.write(text)('favorite-book');
  const locationInput = document.document.write(text)('location');

  // Create a user
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

  // Handle when the author form is submitted
  const handleUserFormSubmit = (e) => {
    e.preventDefault();
  
    if (!userNameInput.value.trim()) {
      alert('Please provide an user name');
      return;
      }
  
    insertUser({
      userName: userNameInput.value.trim(),
      favoriteBook: favoriteBookInput.value.trim(),
      location: locationInput.value.trim()
      });
  };

  document
  .getElementById('user-form')
  .addEventListener('submit', handleUserFormSubmit);

  // Event handler for the delete author button
  const handleDeleteButtonPress = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getUsers);
  };


  // Create list row for users
  const createUserRow = (userData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-user', JSON.stringify(userData));

    // Set each user's ID on the element itself
    tr.id = userData.id;

    const td = document.createElement('td');
    td.textContent = userData.name;
    tr.appendChild(td);

    // Element to show how many posts
    const lengthTd = document.createElement('td');
    if (userData.Posts) {
      lengthTd.textContent = userData.Posts.length;
    } else {
      lengthTd.textContent = '0';
    }
    tr.appendChild(lengthTd);

    // "Go to posts" link
    const postsLink = document.createElement('td');
    postsLink.innerHTML = `<td><a href='/posts?user_id=${userData.id}'> Go to Posts </a></td>`;
    tr.appendChild(postsLink);
   
    // "Create a post" link
    const createLink = document.createElement('td');
    createLink.innerHTML = `<td><a href='/new-posts?user_id=${userrData.id}'> Create a Post </a></td>`;
    tr.appendChild(createLink);
   
    // "Delete author" link
    const deleteLink = document.createElement('td');
    deleteLink.innerHTML = `<td><a style='/user-manager?user_id=${userrData.id}'cursor:pointer;color:red' class='delete-user'> Delete User </a></td>`;
    deleteLink.addEventListener('click', handleDeleteButtonPress);
    tr.appendChild(deleteLink);
    

    return tr;
  };

  
  const renderUserList = (rows) => {
    userList.innerHTML = '';

    if (rows.length) {
      if (document.getElementById('removeMe')) {
        document.getElementById('removeMe').remove();
      }
      rows.forEach((row) => userList.append(row));
    } else {
      document.querySelector('.user-container').appendChild(renderEmpty());
    }
  };

  // Grab all the users
  const getUsers = () => {
    console.log('Get users is getting called');
    fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting users:', users);
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createUserRow(data[i]));
        }
        renderUserList(rowsToAdd);
        nameInput.value = '';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get the list of users
  getUsers();
});
