import { expect } from "chai"; 
import {lookupChar} from "./03. Char Lookup.js";

describe("Test suit", function (){
    it("returns undefined if the first par is not a str", () => {
        expect(lookupChar(2, 3)).to.be.undefined;
    });
    it("returns undefined if the first par is not a str", () => {
        expect(lookupChar([3], 3)).to.be.undefined;
    });
    it("returns undefined if the first par is not a str", () => {
        expect(lookupChar(2.5 , 3)).to.be.undefined;
    });

    it("returns undefined if the sec par is not a num", () => {
        expect(lookupChar("hello", "p")).to.be.undefined;
    });
    it("returns undefined if the sec par is not a num", () => {
        expect(lookupChar("hello", 5.6)).to.be.undefined;
    });
    it("returns undefined if the sec par is not a num", () => {
        expect(lookupChar("hello", ["lk"])).to.be.undefined;
    });
    it("returns undefined if the sec par is not a num", () => {
        expect(lookupChar("hello", [4])).to.be.undefined;
    });

    it("returns a message if the idx is smaller", () => {
        expect(lookupChar("hello", -3)).to.equal("Incorrect index");
    });
    it("returns a message if the idx is equal", () => {
        expect(lookupChar("hello", 5)).to.equal("Incorrect index");
    });
    it("returns a message if the idx is bigger", () => {
        expect(lookupChar("hello", 10)).to.equal("Incorrect index");
    });

    it("returns correct output with the correct input", () => {
        expect(lookupChar("hello", 2)).to.equal("l");
    });
    it("returns correct output with the correct input", () => {
        expect(lookupChar("Martin", 4)).to.equal("i");
    });
    it("returns correct output with the correct input", () => {
        expect(lookupChar("hi", 0)).to.equal("h");
    })
})