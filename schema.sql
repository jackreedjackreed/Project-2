DROP DATABASE IF EXISTS NameGenerator_db;
CREATE DATABASE NameGenerator_db;
use NameGenerator_db;

create TABLE adjectives (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
adjective VARCHAR (50),
primary key (id)
);

create TABLE nouns (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
noun VARCHAR (50),
primary key (id)
);

create table Generated_Name (
id integer (200) auto_increment not null,
last_name varchar (50),
first_name varchar (50),
primary key (id)
);

create TABLE adjectives (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
adjective VARCHAR (50),
primary key (id)
);

create TABLE nouns (
 id INTEGER(200) AUTO_INCREMENT NOT NULL,
noun VARCHAR (50),
primary key (id)
);

create table cool_name (
id integer (200) auto_increment not null,
last_name varchar (50),
first_name varchar (50),
primary key (id)
);

INSERT INTO adjectives ( adjective ) VALUES ("Bumfuzzled");
INSERT INTO adjectives ( adjective ) VALUES ("Catawampus");
INSERT INTO adjectives ( adjective ) VALUES ("Wabbit");
INSERT INTO adjectives ( adjective ) VALUES ("Erinaceous");
INSERT INTO adjectives ( adjective ) VALUES ("Pauciloquent");
INSERT INTO adjectives ( adjective ) VALUES ("Brouhaha");
INSERT INTO adjectives ( adjective ) VALUES ("Playful");
INSERT INTO adjectives ( adjective ) VALUES ("Whimsical");
INSERT INTO adjectives ( adjective ) VALUES ("Confused");
INSERT INTO adjectives ( adjective ) VALUES ("Magical");
INSERT INTO adjectives ( adjective ) VALUES ("Gorgeous");
INSERT INTO adjectives ( adjective ) VALUES ("Flamboyant");
INSERT INTO adjectives ( adjective ) VALUES ("Lyrical");
INSERT INTO adjectives ( adjective ) VALUES ("Metaphorical");
INSERT INTO adjectives ( adjective ) VALUES ("Gregarious");
INSERT INTO adjectives ( adjective ) VALUES ("Imaginative");
INSERT INTO adjectives ( adjective ) VALUES ("Fearless");
INSERT INTO adjectives ( adjective ) VALUES ("Fortuitous");
INSERT INTO adjectives ( adjective ) VALUES ("Splendid");
INSERT INTO adjectives ( adjective ) VALUES ("Dazzling");
INSERT INTO adjectives ( adjective ) VALUES ("Vivacious");
INSERT INTO adjectives ( adjective ) VALUES ("Brilliant");
INSERT INTO adjectives ( adjective ) VALUES ("Magnificent");
INSERT INTO adjectives ( adjective ) VALUES ("Adventurous");
INSERT INTO adjectives ( adjective ) VALUES ("Witty");
INSERT INTO adjectives ( adjective ) VALUES ("Droll");
INSERT INTO adjectives ( adjective ) VALUES ("Scintillating");
INSERT INTO adjectives ( adjective ) VALUES ("Gleaming");
INSERT INTO adjectives ( adjective ) VALUES ("Chatoyant");
INSERT INTO adjectives ( adjective ) VALUES ("Courageous");
INSERT INTO adjectives ( adjective ) VALUES ("Nimble");
INSERT INTO adjectives ( adjective ) VALUES ("Soaring");
INSERT INTO adjectives ( adjective ) VALUES ("Adroit");
INSERT INTO adjectives ( adjective ) VALUES ("Concomitant");
INSERT INTO adjectives ( adjective ) VALUES ("Contumacious");
INSERT INTO adjectives ( adjective ) VALUES ("Effulgent");
INSERT INTO adjectives ( adjective ) VALUES ("Fecund");
INSERT INTO adjectives ( adjective ) VALUES ("Limpid");
INSERT INTO adjectives ( adjective ) VALUES ("Munificent");
INSERT INTO adjectives ( adjective ) VALUES ("Ruminative");
INSERT INTO adjectives ( adjective ) VALUES ("Tenacious");

INSERT INTO nouns ( noun ) VALUES ("Critic");
INSERT INTO nouns ( noun ) VALUES ("Stranger");
INSERT INTO nouns ( noun ) VALUES ("Pilgrim");
INSERT INTO nouns ( noun ) VALUES ("Sailor");
INSERT INTO nouns ( noun ) VALUES ("Rambler");
INSERT INTO nouns ( noun ) VALUES ("Wayfarer");
INSERT INTO nouns ( noun ) VALUES ("Bard");
INSERT INTO nouns ( noun ) VALUES ("Sonnet");
INSERT INTO nouns ( noun ) VALUES ("Rhapsodist");
INSERT INTO nouns ( noun ) VALUES ("Mastermind");
INSERT INTO nouns ( noun ) VALUES ("Scholar");
INSERT INTO nouns ( noun ) VALUES ("Sage");
INSERT INTO nouns ( noun ) VALUES ("Philosopher");
INSERT INTO nouns ( noun ) VALUES ("Savant");
INSERT INTO nouns ( noun ) VALUES ("Metaphor");
INSERT INTO nouns ( noun ) VALUES ("Gerund");
INSERT INTO nouns ( noun ) VALUES ("Alliteration");
INSERT INTO nouns ( noun ) VALUES ("Allusion");
INSERT INTO nouns ( noun ) VALUES ("Anaphora");
INSERT INTO nouns ( noun ) VALUES ("Asyndeton");
INSERT INTO nouns ( noun ) VALUES ("Epistrophe");
INSERT INTO nouns ( noun ) VALUES ("Foreshadowing");
INSERT INTO nouns ( noun ) VALUES ("Hyperbole");
INSERT INTO nouns ( noun ) VALUES ("Irony");
INSERT INTO nouns ( noun ) VALUES ("Juxtaposition");
INSERT INTO nouns ( noun ) VALUES ("Oxymoron");
INSERT INTO nouns ( noun ) VALUES ("Satire");
INSERT INTO nouns ( noun ) VALUES ("Paradox");
INSERT INTO nouns ( noun ) VALUES ("Assonance");
INSERT INTO nouns ( noun ) VALUES ("Ode");
INSERT INTO nouns ( noun ) VALUES ("Dactyl");
INSERT INTO nouns ( noun ) VALUES ("Anapest");
INSERT INTO nouns ( noun ) VALUES ("Ambiguity");
INSERT INTO nouns ( noun ) VALUES ("Aesthetics");
INSERT INTO nouns ( noun ) VALUES ("Narrator");
INSERT INTO nouns ( noun ) VALUES ("Scop");
INSERT INTO nouns ( noun ) VALUES ("Stanza");
INSERT INTO nouns ( noun ) VALUES ("Fabliau");
INSERT INTO nouns ( noun ) VALUES ("Beast");
INSERT INTO nouns ( noun ) VALUES ("Singer");
INSERT INTO nouns ( noun ) VALUES ("Whisperer");

