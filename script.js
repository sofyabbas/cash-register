//The price variable is the price of the item
let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

let currencyUnits = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100]
];
//cash is the amount of cash provided by the customer for the item
//let cash;

const priceScreen = document.getElementById("price-screen");
priceScreen.textContent = price;

const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

purchaseBtn.addEventListener("click", () => {
    const cashValue = parseFloat(cash.value);
    const change = cashValue - price;
    if (cashValue === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    }
    if (cashValue < price) {
        changeDue.textContent = "Customer does not have enough money to purchase the item";
    }
}); 