create a function that has two arguments
function cred(name, password) {

  if (name.includes("!", "#", "$") || name.length< 6){
        console.log("invalid")
      } else if (name != password && name.length >= 6) {
        console.log("valid")
      }

    if ( password != name && password.length >= 6 && password.includes("!", "#", "$")
    && password != "password!") {
        console.log("valid")
      } else {
        console.log("invalid")
      }
}


cred("name123", "4")
cred("d", "pass123!")
cred("willy123", "pass123!")







create a function that has two arguments
function cred(name, password) {
  //create an if statement that anayzes if name is not equal to password and the length
  //of name&password is >= 6
  if (name != password &&
      name.length >= 6 &&
      name.includes("!", "#", "$") &&
      password !== name &&
      password.length >= 6 &&
      password.includes("!", "#", "$") &&
      password != "password") {
      //create an if statement to check if it contains !,#,$
      if (name.includes("!", "#", "$")) {
        //if it contains !,#,$ then name is invalid, if not it is valid
        console.log("invalid")
      } else {
        console.log("valid")
      }
  }
    // create an if statement to check if password includes at least on of !#$ and if b is not equal to "password"
    if ( password != name && password.length >= 6 && password.includes("!", "#", "$")
    && password != "password") {
        // if it contains at least on of !#$ and b does not equal to password, then b is valid
        console.log("valid")
      } else {
        console.log("invalid")
      }
}

cred("Willy66", "123345!")






create a function that creates car objects that have three arguments
add a function that returns the three arguments as one string and use the method to tell the car info
var speed
var getSpeed = 20
var accelerate = getSpeed + 10
var brake = getSpeed - 7

var car = {
  modelYear: "2007",
  make: "Honda",
  color: "white",
  speed: 20,
  getData: function() {
    return this.modelYear + " " + this.make + " is " + this.color
  },

  getSpeed: function() {
    return "Your speed is " + this.speed
  },
  accelerate: function () {
    return "Your new speed is " + (this.speed + 10)
  },
  brake: function () {
    return "When you brake your speed is " + (this.speed - 7)
  },
};


console.log(car.getData());
console.log(car.getSpeed());
console.log(car.accelerate());
console.log(car.brake());

var text = ""
var i = 0;
while (i <= 70) {
    text += "\nYour speed is "+ i;
    i++;
};
console.log(text);

var text1 = ""
var i = 70;

function stop() {

  while (i > 0) {
    text1 += "\nYour speed is "+ i;
    i--;
  }
  console.log(text1);


  if (i === 0) {
    return ("Your car is stopped");
  }

}
console.log(stop());


limit the car's max speed to 85

