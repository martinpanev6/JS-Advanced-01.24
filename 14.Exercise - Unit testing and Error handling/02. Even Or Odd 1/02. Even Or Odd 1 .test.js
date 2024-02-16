import { assert } from "chai";
import { isOddOrEven } from "../02. Even Or Odd 1/02. Even Or Odd 1 .js";

describe("isOddOrEven", () => {
    it("test with no string value", () => {
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "returned type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "returned type must be undefined");
        assert.isNotOk(isOddOrEven([]), "returned type must be undefined");
    });

    it("test with valid string value", () => {
        assert.equal(isOddOrEven("pesho"), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("goshoo"), "even", "result is correct (even)");
    })
});