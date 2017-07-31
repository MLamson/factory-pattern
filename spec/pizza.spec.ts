import { Pizza, PizzaFactory } from "../src/pizza";
describe("order pizza", () => {
    it("should return cheese pizza", () => {
        let pizzaFactory: PizzaFactory = new PizzaFactory();
        expect(pizzaFactory.orderPizza("cheese")).toBe("Cheese Pizza");
    });
    it("should return a Pepperoni pizza", () => {
        let pizzaFactory: PizzaFactory = new PizzaFactory();
        expect(pizzaFactory.orderPizza("perpperoni")).toBe("Pepperoni Pizza");
    });
});