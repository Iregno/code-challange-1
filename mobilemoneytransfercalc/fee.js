//Constants
const minFee = 10;
const maxFee = 70;
const feeRate = 0.015;

//Function to estimate transaction fee
function estimateTransactionFee(amountToSend) {
    let calculatedFee = amountToSend * feeRate;

    //Apply minimum and maximum fee limits
    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = maxFee;
    } 

    const totalDebited = amountToSend + calculatedFee;

//output the results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");
}

//prompt user for input
const input = prompt("Unatuma ngapi? (KES): ");
const amountToSend = Number(input);

//Input validation
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi halali cha pesa.");
}
else {
    estimateTransactionFee(amountToSend);
}

