console.log('Here is OOP JS:');

// Exercise #2 SuperHero
class SuperHero {
    constructor(name, age, specialPower) {
        this.name = name;
        this.age = age;
        this.specialPower = specialPower;
    }

    changeName(newName) {
        this.name = newName
    }

    changeAge(newAge) {
        this.age = newAge;
    }

    changeSpecialPower(newPower) {
        this.specialPower = newPower;
    }
}

/*
// Test Exercise #1:
let hero = new SuperHero('IronMan', '35', 'can fly');

console.log(hero);
hero.changeName('Iron Man');
hero.changeAge('32');
hero.changeSpecialPower('Super Smart');
console.log(hero);
*/









// exercise #1: sing a song
function Song (songName, songBand) {
    this.songName = songName;
    this.songBand = songBand;
}

Song.prototype.countName = function() {
    console.log(this.songName.split(' ').length);
    return this.songName.split(' ').length;
}

Song.prototype.createElement = function() {
    $('body').append('<div id="newElement">Song name: ' + this.songName + '</div>');
}

/*

// Test Exercise #2
var song1 = new Song('Bitter Life Without You', 'Khalid');
song1.countName();
song1.createElement();

*/









class Cat {
    constructor() {
        this.tiredness = 5;
        this.hunger = 5
        this.lonliness = 5;
        this.happiness = 5;
    }

    sleep(newTiredness) {
        if(tiredness > 0)
            this.tiredness--;
        
        if(newTiredness) {
            this.tiredness = newTiredness;   
        }
    }

    feed(newHunger, newTiredness) {
        if(this.hunger > 0) 
            this.hunger--;
        
        if(this.tiredness < 11)
            this.tiredness++;

        if(newHunger)
            this.hunger = newHunger;

        if(newTiredness)
            this.tiredness = newTiredness;
    }

    pet(newLonliness, newHappiness) {
        if(newLonliness > 0)
            this.lonliness--;
        
        if(this.happiness < 11)
            this.happiness++;

        if(newLonliness)
            this.lonliness = newLonliness;

        if(newHappiness)
            this.happiness = newHappiness;
    }

    play(newTiredness, newHappiness, newHunger) {
        if(this.tiredness > 0) 
            this.tiredness ++;
        
        if(this.happiness < 11)
            this.happiness++;
        
        if(this.hunger > 0)
            this.hunger++;

        if(newTiredness)
            this.tiredness = newTiredness;

        if(newHappiness)
            this.happiness = newHappiness;

        if(newHunger)
            this.hunger = newHunger;

    }

    level(property) {
        if(property >= 8 && property <= 10 || property >= 2 && property <= 1)
            return 'extremly ';
        if(property >= 4 && property <= 7)
            return 'very '
        if(property > 6 && property < 4)
            return 'starting to feel '

        return 'normally'
    }
    
    checkStatus() {
        let status = 'The cat is ' + this.level(this.hunger) + ' hungry, ' + this.level(this.tiredness) + ' tired, ' + this.level(this.happiness) + ' happy, ' + this.level(this.lonliness) + ' lonely';
        
        console.log(status);
        return status;
    }
}


let saly = new Cat();

