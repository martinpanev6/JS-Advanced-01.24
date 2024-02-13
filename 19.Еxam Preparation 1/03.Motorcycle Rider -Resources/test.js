import { expect } from "chai";
import {motorcycleRider} from './Motorcycle Rider.js';

describe("Test suite", function(){
    
    describe("licenceRestriction", ()=>{
        it("returns correct output for AM", ()=>{
            expect(motorcycleRider.licenseRestriction("AM")).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        });
        it("returns correct output for A1", ()=>{
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });
        it("returns correct output for A2", ()=>{
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });
        it("returns correct output for A", ()=>{
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
        it("throw error for invalid input str", ()=>{
            expect(() => motorcycleRider.licenseRestriction("Z")).to.throw();
        });
        it("throw error for invalid input num", ()=>{
            expect(() => motorcycleRider.licenseRestriction(8)).to.throw();
        });
    });

    describe("Showroom functionality", function(){
        it("returns 1 element from array", () =>{
            expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal("There are 1 available motorcycles matching your criteria!");
        });
        it("returns all element from array", () =>{
            expect(motorcycleRider.motorcycleShowroom(['50', '51'], 100)).to.equal("There are 2 available motorcycles matching your criteria!");
        });
        it("returns only matching elements from array", () =>{
            expect(motorcycleRider.motorcycleShowroom(['50', '51'], 50)).to.equal("There are 1 available motorcycles matching your criteria!");
        });
        it("throws for non array", () =>{
            expect(() => motorcycleRider.motorcycleShowroom('50', 50)).to.throw();
        });
        it("throws for non num", () =>{
            expect(() => motorcycleRider.motorcycleShowroom(['50'], "s")).to.throw();
        });
    });

    describe("other spendings functionallity", function(){
        it("retutns correct sum without discount", () =>{
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal("You spend $600.00 for equipment and consumables!")
        });
        it("retutns correct sum with discount", () =>{
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!")
        });
        it("trows for non arr equipment", () =>{
            expect(() => motorcycleRider.otherSpendings("helmet", ['engine oil', 'oil filter'], true)).to.throw();
        });
        it("trows for non arr consumables", () =>{
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], 'engine oil', true)).to.throw();
        });
        it("trows for non bool val", () =>{
            expect(() => motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 0)).to.throw();
        });
    })
})