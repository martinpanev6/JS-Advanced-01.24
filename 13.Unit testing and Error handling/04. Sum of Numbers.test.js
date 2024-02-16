import { expect } from "chai";
import {sum} from "./04. Sum of Numbers.js";

describe("Module 1 Unit Tests", function(){
    describe("Testing input values", () => {
        it("returns correct output for array", () => {
            expect(sum([1, 2, 3, 4, 5])).to.equal(15);
        });
        it("returns correct output for blank array", () => {
            expect(sum([])).to.equal(0);
        });
        it("returns correct output for negative array", () => {
            expect(sum([-1, -3, -5])).to.equal(-9);
        });
        it("returns correct output for diff array", () => {
            expect(sum([8, -5, -3, 8])).to.equal(8);
        });
        it("returns correct output for string array", () => {
            expect((sum(["a", "b", "c"]))).to.be.NaN;
        });
        it("returns correct output for dif array", () => {
            expect(sum([1, "a", 2])).to.be.NaN;
        });
        it("throws an error for numeric input", () => {
            expect(() => sum(5)).to.throw();
        });
        it("throws an error for string input", () => {
            expect(sum("mm")).to.be.NaN;
        });
        it("throws an error for blank input", () => {
            expect(() => sum()).to.throw();
        });
        it("throws an error for numeric input", () => {
            expect(() => sum(5)).to.throw(Error);
        });
    })
})