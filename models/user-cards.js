const db = require('../models');

module.exports = (sequelize, DataTypes) => {
    function card(club, user_name, favorite_book, suit){
	    this.value = club;
	    this.name = user_name;
        this.value = favorite_book;
	    this.suit = suit;
    };

    function deck(){
        this.club =  $(clubName);
	    this.user_name = $(firstName, lastName);
        this.favorite_book = $(favoriteBook)
	    this.suits = ['Hearts','Diamonds','Spades','Clubs'];

	    var cards = [];
    
        for (var s = 0; s < this.suits.length; s++ ) {
            for( var n = 0; n < this.names.length; n++ ) {
                cards.push( new card( n+1, this.names[n], this.suits[s] ) );
            }
        }

        return cards;
    };
}