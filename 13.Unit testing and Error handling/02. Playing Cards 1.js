function createCard(face, suit) {
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const validSuits = {
        S: "\u2660", // ♠
        H: "\u2665", // ♥
        D: "\u2666", // ♦
        C: "\u2663"  // ♣
    };

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

// Example usage:
try {
    const myCard = createCard("A", "S");
    console.log(myCard.toString()); // Output: A♠
} catch (error) {
    console.error(error.message);
}

