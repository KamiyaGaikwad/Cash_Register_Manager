const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const currencyTable = document.querySelector("#currency-table");
const cashGivenLabel = document.querySelector("#cash-given-label");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
hideCashGiven();
hideCurrencyTable();
nextButton.addEventListener("click", function showCashGivenAndCheckButton(){
    showCashGiven();
})
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    console.log(isNaN(billAmount.value))
    if (isNaN(billAmount.value)){
        showMessage("Enter bill amount in number please");
        
    }
    else{
        if (billAmount.value >0){
            if (cashGiven.value >= billAmount.value) {
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
                showCurrencyTable();
            }else {
               showMessage("The cash provided should atleast be equal to the bill amount"); 
            }
        }else {
            showMessage("The bill amount should be greater than zero");
    
            }    
    
}})

function showMessage(messageWrite) {
    message.style.display = "block";
    message.innerText = messageWrite;
    
}

function calculateChange(amountToBeReturn){
    for (let i=0;i< availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn = amountToBeReturn % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        
    }
}

function hideMessage(){
    message.style.display = "none";
}

//bonus bill amount as string show error 
// invalid bill amount, enter in number 

function hideCashGiven(){
    cashGivenLabel.style.display = "none";
    cashGiven.style.display = "none";
    checkButton.style.display = "none";
}

function hideCurrencyTable() {
    currencyTable.style.display = "none";
}

function showCashGiven(){
    cashGivenLabel.style.display = "block";
    cashGiven.style.display = "block";
    checkButton.style.display = "block";
}

function showCurrencyTable() {
    currencyTable.style.display = "block";
}
