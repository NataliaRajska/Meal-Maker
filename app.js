const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn) {
            this._appetizers = appetizersIn;
        },
        get mains() {
            return this._mains;
        },
        set mains(mainsIn) {
            this._mains = mainsIn;
        },
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts = dessertsIn;
        },
    },

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    ///===============================================================

    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
};

menu.addDishToCourse('appetizers', 'nachos', 2.00);
menu.addDishToCourse('appetizers', 'tacos', 3.00);
menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'vegetables', 8.00);
menu.addDishToCourse('desserts', 'ice cream', 1.00);
menu.addDishToCourse('desserts', 'cake', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal)
