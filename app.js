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
    }
};
