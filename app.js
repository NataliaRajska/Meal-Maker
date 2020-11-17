const menu = {
    _courses: {
        appetizer:[],
        mains:[],
        desserts: []
    },
    get appetizers(){
        return this._courses.appetizer;
    },
    get mains(){
        return this._courses.mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set appetizers(appetizer){
        return this._courses.appetizer = appetizer;
    },
    set mains(main){
        return this._courses.mains = main;
    },
    set desserts(dessert){
        return this._courses.desserts = dessert;
    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName,dishName,dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizers = this.getRandomDishFromCourse('appetizer');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts')

        const totalPrice = appetizers.price + mains.price + desserts.price;
        return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
    }
};


menu.addDishToCourse('appetizers', 'nachos', 2.00);
menu.addDishToCourse('appetizers', 'tacos', 3.00);
menu.addDishToCourse('mains', 'steak', 10.00);
menu.addDishToCourse('mains', 'vegetables', 8.00);
menu.addDishToCourse('desserts', 'ice cream', 1.00);
menu.addDishToCourse('desserts', 'cake', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal)
