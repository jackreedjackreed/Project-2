// function card(club, user_name, favorite_book, suit){

// 	    this.club = club;
// 	    this.name = user_name;
//         this.favorite_book = favorite_book;
// 	    this.suit = suit;
//     };

    // function deck(){
    //     this.club =  clubName;
	//     this.user_name = firstName, lastName;
    //     this.favorite_book = favoriteBook
	//     this.suits = ['Hearts','Diamonds','Spades','Clubs'];

	//     var cards = [];
        
    //     //
    //     for (var s = 0; s < this.suits.length; s++ ) {
    //         for( var n = 0; n < this.club.length; n++ ) {
    //             cards.push( new card( n+1, this.club[n], this.suits[s] ) );
    //         }
    //     }

    //     return cards;npx tailwindcss init
    // };

    // Test to see if deck prints out in consule
    // var myDeck = new deck();
    // console.log(myDeck);

    // window.onload = function() {

    //     for(var i=0; i < myDeck.length; i++){
    //         div = document.createElement('div');
    //         div.className = 'card';
    
    //         if(myDeck[i].suit == 'Diamonds'){
    //             var ascii_char = '♦';
    //         } else {
    //             var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
    //         }
    
    //         div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
    //         document.body.appendChild(div);
    //     }
    
    // };


//Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const userInput = document.getElementById('user-name');
    
    // Create an author
    const insertUser = (userData) => {
     fetch('/api/users-api-routes', {
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
    
        if (!userInput.value.trim()) {
          alert('Please provide an author name');
          return;
        }
    
        insertUser({
          name: userInput.value.trim(),
        });
  };

    document
    .getElementById('user-form')
    .addEventListener('submit', handleUserFormSubmit);

    // Create list row for users
  const createUserRow = (userData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-user', JSON.stringify(userrData));

    // Set each users's ID on the element itself
    tr.id = userrData.id;

    const td = document.createElement('td');
    td.textContent = userrData.name;
    tr.appendChild(td);

    // show how many posts
    const lengthTD = document.createElement('td');
    if (userData.Posts) {
        lengthTD.textContent = userData.Posts.length;
    } else {
        lengthTD.textContent = '0';
    }
    tr.appendChild(lengthTD);

    // "go to posts"




    
    


};