//constants in calculation of fare
const baseFare = 50; //base fare in KES 
const chargePerKm = 15; //charge per kilometer in KES

//function to calculate bodaboda fare
function calculateBodaFare(distanceInKm) {
    const distanceFare = distanceInKm * chargePerKm; //calculate fare based on distance
    const totalFare = baseFare + distanceFare; //add base fare to distance fare


    console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!");
}

//prompt user for input
const input = prompt("Unafika wapi mkubwa? Kilometre ngapi?:");
const distanceInKm = Number(input);

//input validation
if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali ingiza umbali sahihi katika kilomita.");
} else {
    calculateBodaFare(distanceInKm);
}