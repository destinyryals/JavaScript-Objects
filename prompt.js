const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super"
   }

//Prompt 1
console.log(`The car object: ${Object.values(car)}`)

//Prompt 2
function printObject(obj) {
    var x, txt = "";

    for (x in obj) {
        txt += obj[x] + " "
        }
    return txt
}

console.log(printObject(car))
//Prompt 3
delete car.gasoline

//Prompt 4

function objectKeys (obj) {
    return Object.keys(obj)
}
console.log(objectKeys(car))

//Prompt 5
function objectValue (obj) {
    return Object.values(obj)
}
console.log(objectValue(car))

//Prompt 6
car.tints = '33%';
car.carplay = true;

//Prompt 7
    car.startEngine = function () {
        var engineOn = true;
        return 'VROOM VROOM'
    }

//Prompt 8
    car.turnOffEngine = function () {
        var engineOn = false;
        return 'car turned off'
    }


//Prompt 9
for (var prop in car) {
    console.log(prop) 
        
    }
//Prompt 10
let eagle = {
    favoriteFood: ['Fish', 'Mice', 'Squirrels'],
    canFly: true, 
    canSwim: true,
    canFloat: true,
    endangered: false,
    chirpSound : function() {

      },
    birdDiet : function() {
    },
    fly : function () {
        if (canFly === true) {
            return "I Live in the sky"
        }else {
            return "I'd like to say to say on the ground"
        }
    }
}