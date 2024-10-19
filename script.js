document.getElementById('income-tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const tax = calculateIncomeTax(income);
    document.getElementById('income-tax-result').innerText = `Total Income Tax: $${tax.toFixed(2)}`;
});

document.getElementById('sales-tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const purchaseAmount = parseFloat(document.getElementById('purchase-amount').value);
    const tax = calculateSalesTax(purchaseAmount);
    const totalCost = purchaseAmount + tax;
    document.getElementById('sales-tax-result').innerText = `Total Sales Tax: $${tax.toFixed(2)}, Total Cost: $${totalCost.toFixed(2)}`;
});

document.getElementById('property-tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const propertyValue = parseFloat(document.getElementById('property-value').value);
    const tax = calculatePropertyTax(propertyValue);
    document.getElementById('property-tax-result').innerText = `Total Property Tax: $${tax.toFixed(2)}`;
});

function calculateIncomeTax(income) {
    let tax = 0;

    if (income <= 10000) {
        tax = income * 0.10;
    } else if (income <= 40000) {
        tax = 1000 + (income - 10000) * 0.12;
    } else if (income <= 85000) {
        tax = 4600 + (income - 40000) * 0.22;
    } else if (income <= 160000) {
        tax = 14000 + (income - 85000) * 0.24;
    } else if (income <= 204100) {
        tax = 38600 + (income - 160000) * 0.32;
    } else if (income <= 510300) {
        tax = 57000 + (income - 204100) * 0.35;
    } else {
        tax = 174400 + (income - 510300) * 0.37;
    }

    return tax;
}

function calculateSalesTax(amount) {
    return amount * 0.07;
}

function calculatePropertyTax(value) {
    return value * 0.0125;
}
