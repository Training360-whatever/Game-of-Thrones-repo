var randomQuotes = [
  'The powerful have always preyed on the powerless. That’s how they became powerful in the first place.  —  Tyrion Lannister',
  'The man who passes the sentence should swing the sword  —  Ned Stark.',
  'Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again.  —  Petyr Baelish',
  'The fall breaks them. And some are given a chance to climb; they cling to the real or the gods or love.  —  Petyr Baelish',
  'There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.’  —  Syrio Forel',
  'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you  —  Tyrion Lannister',
  'Any man who must say ‘I am the King’ is no true King  —  Tywin Lannister',
  'It’s the family name that lives on. It’s all that lives on.  —  Tywin Lannister',
  'You know nothing, Jon Snow.  —  Ygritte',
  'Nothing isn’t better or worse than anything. Nothing is just nothing.  —  Arya Stark',
  'I have always found revenge to be the purest of motivations.  —  Petyr Baelish',
  'It’s better to be cruel than weak.  —  Theon Greyjoy',
  'The freedom to make my own mistakes was all I ever wanted.  —  Mance Rayder',
  'The man who passes the sentence should swing the sword.  —  Ned Stark',
  'When you play the game of thrones, you win or you die.  —  Cersei',
  'A Lannister always pays his debts.  —  Various Lannisters',
  'Winter is coming  —  Pretty much everyone',
  'A girl is Arya Stark of Winterfell. And I am going home.',
  'Hold the door.  —  Hodor',
  'The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.  —  Tyrion'
];

var randomNumberForQuotes = Math.floor(Math.random() * 20);
document.getElementById('random-quote-display').innerHTML = `${randomQuotes[randomNumberForQuotes]}`;


