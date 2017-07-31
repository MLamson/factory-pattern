export class Pizza {

}

export class PizzaFactory {
    pizza: Pizza = new Pizza();

    orderPizza(pizzaType: string): string {
        if (pizzaType === "cheese") {
            return "Cheese Pizza";
        }
        return "Pepperoni Pizza";
    }
}