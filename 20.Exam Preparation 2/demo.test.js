import { assert } from "chai"; 
import {findNewApartment} from "./03.Find Apartment/findApartment.js";

describe("Test suit", function(){
    describe("isGoodLocation", () =>{
        it("test with invalid parameters", () =>{
            assert.throws(() => findNewApartment.isGoodLocation(6, "Pesho"));
            assert.throws(() => findNewApartment.isGoodLocation("Pesho", "Pesho"));
            assert.throws(() => findNewApartment.isGoodLocation(6, true));
        });

        it("tests with invalid city", () =>{
            assert.equal(findNewApartment.isGoodLocation("Shumen", true), "This location is not suitable for you.");
            assert.equal(findNewApartment.isGoodLocation("Shumen", false), "This location is not suitable for you.")
        });

        it("test with invalid data", () => {
            assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.");
            assert.equal(findNewApartment.isGoodLocation("Varna", false), "There is no public transport in area.");
            assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area.");
        });

        it("test with correct values", () =>{
            assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!");
            assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
        })
    });

    describe("isLargeEnough", () => {
        it("tests with invalid input", () => {
            assert.throws(() => findNewApartment.isLargeEnough("pesho", "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough([], "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough(["gosho", "pesho"], "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough([], 6));
            assert.throws(() => findNewApartment.isLargeEnough("gosho", 6));
            assert.throws(() => findNewApartment.isLargeEnough([30, 40, 60], "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough([30, 40, 60], "60"));
        });
        it("with valid parameters", () => {
            let res = [10, 20, 30];
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 9), res.join(", "));
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 9), res.join(", "));
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 50), "");
        })
    });

    describe("isItAffordable", () => {
        it("tests with invalid input", () =>{
            assert.throws(() => findNewApartment.isLargeEnough("pesho", "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough(0, 0));
            assert.throws(() => findNewApartment.isLargeEnough(-10, -10));
            assert.throws(() => findNewApartment.isLargeEnough(10, "pesho"));
            assert.throws(() => findNewApartment.isLargeEnough(10, 0));
            assert.throws(() => findNewApartment.isLargeEnough(10, -10));
            assert.throws(() => findNewApartment.isLargeEnough(-8, 10));
            assert.throws(() => findNewApartment.isLargeEnough("pesho", 10));
            assert.throws(() => findNewApartment.isLargeEnough(0, 10));
        });
        it("returned value is 0", () =>{
            assert.equal(findNewApartment.isItAffordable(10, 9), "You don't have enough money for this house!");
            assert.equal(findNewApartment.isItAffordable(10, 1), "You don't have enough money for this house!");
        });
        it("returned value is positive", () =>{
            assert.equal(findNewApartment.isItAffordable(10, 20), "You can afford this home!");
            assert.equal(findNewApartment.isItAffordable(10, 10), "You can afford this home!");
            assert.equal(findNewApartment.isItAffordable(1, 1), "You can afford this home!");
        })
    })
})