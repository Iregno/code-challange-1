function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // in ml
    const milkPerCup = 50; // in ml
    const teaLeavesPerCup = 1; // tablespoon
    const sugarPerCup = 2; // teaspoon

    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
     
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);

}

//prompt user for the number of cups
const input = prompt("How many cups of Kenyan Chai would you like to make? (Enter a number): ");
const numberOfCups = Number(input);

if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
} else {
    calculateChaiIngredients(numberOfCups);
}