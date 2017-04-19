import { Dollar } from "../src/money";

describe("Money Test", ()=> {
    it("should test multiplication", ()=> {
        let five: Dollar = new Dollar(5);
        five.times(2);
        expect(five.amount).toEqual(10);
    });
});