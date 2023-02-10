'use strict';

const _ = require("lodash");


const allowedRanks = {
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Jack",
    12: "Queen",
    13: "King",
    14: "Ace",
};

const allowedSuits = {
    1: "Hearts",
    2: "Diamonds",
    3: "Clubs",
    4: "Spades",
};

function Card(rank, suit) {
    return {
        rank: Number(rank),
        suit: Number(suit),
    }
}

function createDeck() {
    const deck = [];
    Object.keys(allowedRanks).forEach(rank =>
        Object.keys(allowedSuits).forEach(suit =>{
            deck.push(Card(rank, suit));
        }),
    );
    return deck;
}

function printDeck(deck) {
    for (const card of deck) {
        console.log(`${allowedRanks[card.rank]} of ${allowedSuits[card.suit]}`);
    }
}

function countRanks(deck) {
    Object.keys(allowedRanks).forEach(rank => {
        const matchingCards = deck.filter(card => card.rank === Number(rank));
        console.log(`${allowedRanks[rank]}: ${matchingCards.length}`);
    });
}

function main() {
    // Create first deck
    const deck = createDeck();

    // Create another deck and shuffle
    const anotherDeck = _.cloneDeep(deck);
    const shuffledDeck = anotherDeck.sort((a, b) => 0.5 - Math.random());

    deck.forEach((card) => {
        if (card.rank === 14) {
            card.rank = 12
        }
    });

    // Print first deck to make sure it was not affected by the shuffle
    printDeck(deck);
    countRanks(deck);
    
    // Print shuffled deck to verify it's shuffled
    printDeck(shuffledDeck);
    countRanks(shuffledDeck);
}

main();
