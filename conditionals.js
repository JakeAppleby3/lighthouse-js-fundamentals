const raining = true;

const temperature = 45

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves wont cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen &&age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature >40) {
  console.log("Maybegoing outside isn't such a great idea...");
}
