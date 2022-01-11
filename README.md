# JavaScript Uno

Web-based Uno game built that was originally hosted on AWS that allows users to create an account stored with SQL via AJAX post requests in PHP, hashing usernames & passwords. Once logged on, up to 8 players can be visually added around the table. I used JavaScript for all the functionality of the game, manipulating the DOM and HTML elements' styling and using functions & event listeners to apply the rules. Game logic is contained in uno_game.js.

[Github Pages](https://caberghausen.github.io/JavaScript-Uno/login.html) ⬅️ Check it out here

If board doesn't appear, click 'Sign Up.' 2-8 players can be added by clicking 'Add Player,' and game starts after clicking 'Start.' Cards are dealt and drawn pseudo-randomly and play goes clockwise by clicking on the card in each player's hand to be played. If no card can be played, you must click on the deck (the card that says Uno) to draw another card. Play continues until a player gets rid of all of their cards.

All rules of the classic Uno card game are followed (except there is no penalty for forgetting to say "Uno!" when you have 1 card remaining).
