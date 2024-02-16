function deckOfCards(deck){
    function createCard(card) {
        const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const validSuits = {
            S: "\u2660", // ♠
            H: "\u2665", // ♥
            D: "\u2666", // ♦
            C: "\u2663"  // ♣
        };

        const face = card.slice(0, -1);
        const suit = card.slice(-1);
    
        if (!validFaces.includes(face.toUpperCase())) {
            throw new Error("Invalid face");
        }
    
        if (!validSuits.hasOwnProperty(suit.toUpperCase())) {
            throw new Error("Invalid suit");
        }
    
        return {
            face: face.toUpperCase(),
            suit: suit.toUpperCase(),
            toString() {
                return `${this.face}${validSuits[this.suit]}`;
            }
        };
    }
    const cardStrings = [];
    for (let card of deck) {
        try {
            const newCard = createCard(card);
            cardStrings.push(newCard.toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
        }
    }
    console.log(cardStrings.join(' '));

}