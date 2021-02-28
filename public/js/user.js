// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

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

  // Create list row for users
  const createUserRow = (userData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-user', JSON.stringify(userData));

    // Set each user's ID on the element itself
    tr.id = userData.id;

    const td = document.createElement('td');
    td.textContent = userData.name;
    tr.appendChild(td);

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
