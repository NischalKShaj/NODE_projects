// using class for  exporting the modules

class SupreHero{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}

exports.superH = new SupreHero("Batman")