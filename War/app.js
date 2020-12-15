//-------------------------------------DOM & GENERAL VARIABLES-----------------------------------------------------------------------------
const $playerMoney = $('#money-amount');
const diamonds2 = $('<img>').addClass('dealt-card').attr('id','2diamonds').attr('src',"./Images/2Diamonds.png");
const diamonds3 = $('<img>').addClass('dealt-card').attr('id','3diamonds').attr('src',"./Images/3Diamonds.png");
const diamonds4 = $('<img>').addClass('dealt-card').attr('id','4diamonds').attr('src',"./Images/4Diamonds.png");
const diamonds5 = $('<img>').addClass('dealt-card').attr('id','5diamonds').attr('src',"./Images/5Diamonds.png");
const diamonds6 = $('<img>').addClass('dealt-card').attr('id','6diamonds').attr('src',"./Images/6Diamonds.png");
const diamonds7 = $('<img>').addClass('dealt-card').attr('id','7diamonds').attr('src',"./Images/7Diamonds.png");
const diamonds8 = $('<img>').addClass('dealt-card').attr('id','8diamonds').attr('src',"./Images/8Diamonds.png");
const diamonds9 = $('<img>').addClass('dealt-card').attr('id','9diamonds').attr('src',"./Images/9Diamonds.png");
const diamonds10 = $('<img>').addClass('dealt-card').attr('id','10diamonds').attr('src',"./Images/10Diamonds.png");
const diamonds11 = $('<img>').addClass('dealt-card').attr('id','Jackdiamonds').attr('src',"./Images/JackDiamonds.png");
const diamonds12 = $('<img>').addClass('dealt-card').attr('id','Queendiamonds').attr('src',"./Images/QueenDiamonds.png");
const diamonds13 = $('<img>').addClass('dealt-card').attr('id','Kingdiamonds').attr('src',"./Images/KingDiamonds.png");
const diamonds14 = $('<img>').addClass('dealt-card').attr('id','Acediamonds').attr('src',"./Images/AceDiamonds.png");
const clubs2 = $('<img>').addClass('dealt-card').attr('id','2clubs').attr('src',"./Images/2Clubs.png");
const clubs3 = $('<img>').addClass('dealt-card').attr('id','3clubs').attr('src',"./Images/3Clubs.png");
const clubs4 = $('<img>').addClass('dealt-card').attr('id','4clubs').attr('src',"./Images/4Clubs.png");
const clubs5 = $('<img>').addClass('dealt-card').attr('id','5clubs').attr('src',"./Images/5Clubs.png");
const clubs6 = $('<img>').addClass('dealt-card').attr('id','6clubs').attr('src',"./Images/6Clubs.png");
const clubs7 = $('<img>').addClass('dealt-card').attr('id','7clubs').attr('src',"./Images/7Clubs.png");
const clubs8 = $('<img>').addClass('dealt-card').attr('id','8clubs').attr('src',"./Images/8Clubs.png");
const clubs9 = $('<img>').addClass('dealt-card').attr('id','9clubs').attr('src',"./Images/9Clubs.png");
const clubs10 = $('<img>').addClass('dealt-card').attr('id','10clubs').attr('src',"./Images/10Clubs.png");
const clubs11 = $('<img>').addClass('dealt-card').attr('id','Jackclubs').attr('src',"./Images/JackClubs.png");
const clubs12 = $('<img>').addClass('dealt-card').attr('id','Queenclubs').attr('src',"./Images/QueenClubs.png");
const clubs13 = $('<img>').addClass('dealt-card').attr('id','Kingclubs').attr('src',"./Images/KingClubs.png");
const clubs14 = $('<img>').addClass('dealt-card').attr('id','Aceclubs').attr('src',"./Images/AceClubs.png");
const spades2 = $('<img>').addClass('dealt-card').attr('id','2spades').attr('src',"./Images/2Spades.png");
const spades3 = $('<img>').addClass('dealt-card').attr('id','3spades').attr('src',"./Images/3Spades.png");
const spades4 = $('<img>').addClass('dealt-card').attr('id','4spades').attr('src',"./Images/4Spades.png");
const spades5 = $('<img>').addClass('dealt-card').attr('id','5spades').attr('src',"./Images/5Spades.png");
const spades6 = $('<img>').addClass('dealt-card').attr('id','6spades').attr('src',"./Images/6Spades.png");
const spades7 = $('<img>').addClass('dealt-card').attr('id','7spades').attr('src',"./Images/7Spades.png");
const spades8 = $('<img>').addClass('dealt-card').attr('id','8spades').attr('src',"./Images/8Spades.png");
const spades9 = $('<img>').addClass('dealt-card').attr('id','9spades').attr('src',"./Images/9Spades.png");
const spades10 = $('<img>').addClass('dealt-card').attr('id','10spades').attr('src',"./Images/10Spades.png");
const spades11 = $('<img>').addClass('dealt-card').attr('id','Jackspades').attr('src',"./Images/JackSpades.png");
const spades12 = $('<img>').addClass('dealt-card').attr('id','Queenspades').attr('src',"./Images/QueenSpades.png");
const spades13 = $('<img>').addClass('dealt-card').attr('id','Kingspades').attr('src',"./Images/KingSpades.png");
const spades14 = $('<img>').addClass('dealt-card').attr('id','Acespades').attr('src',"./Images/AceSpades.png");
const hearts2 = $('<img>').addClass('dealt-card').attr('id','2hearts').attr('src',"./Images/2Hearts.png");
const hearts3 = $('<img>').addClass('dealt-card').attr('id','3hearts').attr('src',"./Images/3Hearts.png");
const hearts4 = $('<img>').addClass('dealt-card').attr('id','4hearts').attr('src',"./Images/4Hearts.png");
const hearts5 = $('<img>').addClass('dealt-card').attr('id','5hearts').attr('src',"./Images/5Hearts.png");
const hearts6 = $('<img>').addClass('dealt-card').attr('id','6hearts').attr('src',"./Images/6Hearts.png");
const hearts7 = $('<img>').addClass('dealt-card').attr('id','7hearts').attr('src',"./Images/7Hearts.png");
const hearts8 = $('<img>').addClass('dealt-card').attr('id','8hearts').attr('src',"./Images/8Hearts.png");
const hearts9 = $('<img>').addClass('dealt-card').attr('id','9hearts').attr('src',"./Images/9Hearts.png");
const hearts10 = $('<img>').addClass('dealt-card').attr('id','10hearts').attr('src',"./Images/10Hearts.png");
const hearts11 = $('<img>').addClass('dealt-card').attr('id','Jackhearts').attr('src',"./Images/JackHearts.png");
const hearts12 = $('<img>').addClass('dealt-card').attr('id','Queenhearts').attr('src',"./Images/QueenHearts.png");
const hearts13 = $('<img>').addClass('dealt-card').attr('id','Kinghearts').attr('src',"./Images/KingHearts.png");
const hearts14= $('<img>').addClass('dealt-card').attr('id','Acehearts').attr('src',"./Images/AceHearts.png");
let shuffledDeck = [];

const playingCards = [];
for (let i = 2; i<=14; i++){
    playingCards.push(`diamonds`+i);
    playingCards.push(`spades`+i);
    playingCards.push(`hearts`+i);
    playingCards.push(`clubs`+i);
}

let cardsIndex = [];
    playingCards.map((x => {
        cardsIndex.push(playingCards.indexOf(x));
    }))
    

//-----------------------------------------------CLASS CREATIONS--------------------------------------------------------
class Cards {
constructor(playingCards){
    this.cards = playingCards; 
}

shuffle() {
        let shuffledDeckSet = new Set (playingCards.map(x => Math.floor(Math.random() * playingCards.length))); // go through each 52 cards & create a random # then convert to set to get only unique numbers
        let shuffledDeckArray = [...shuffledDeckSet]; // convert set with unique numbers to an array
        console.log(shuffledDeckArray);
        let noMatches = []; // array created that no matched indexes will be pushed to
        cardsIndex.map((element) => {
            shuffledDeckArray.indexOf(element) === -1 ? noMatches.push(element) : '' // loop through each 52 cards by index to see which indexes were not randomly produced when converting to set to get only unique values because shuffledDeckSet is bound to produce duplicates
        })
        console.log(noMatches);
        let noMatchesLength = noMatches.length;
        let halfOfNoMatchesLength = noMatchesLength / 2;
        let halfOfNoMatchesCalc = halfOfNoMatchesLength % 2 !== 0 ? Math.ceil(halfOfNoMatchesLength) : halfOfNoMatchesLength;
        console.log(halfOfNoMatchesCalc);
        console.log(noMatchesLength-halfOfNoMatchesCalc);
        
        // Loop through first half of noMatches array and add them to beginning (via unshift method) of ShuffledDeckArray. Then loop through 2nd half of noMatches array and add them to end (via push method) of ShuffledDeckArray.
        for (let i = 0; i <= halfOfNoMatchesCalc; i++){
            shuffledDeckArray.unshift(noMatches[i]);
        }
        for (let j = halfOfNoMatchesCalc + 1 ; j < noMatchesLength; j++){
        shuffledDeckArray.push(noMatches[j]);
        } 
        this.completeShuffledDeck(shuffledDeckArray);
        return shuffledDeckArray; // This will return a completely shuffled deck of cards by index number to then use to pull up actual card from the sorted playingCards variable   
    }

completeShuffledDeck(shuffledDeckArray) {
        let completeShuffledDeck = [];
        for (let i = 0; i < this.cards.length; i++){
            completeShuffledDeck.push(this.cards[shuffledDeckArray[i]]);
        }
        return completeShuffledDeck;
}



}

const deck1 = new Cards(playingCards);
console.log(deck1.cards);





$(() => {


})