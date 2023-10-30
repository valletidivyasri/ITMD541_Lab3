document.addEventListener("DOMContentLoaded", function () {
    const billTotal = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tip");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");
    const tipForm = document.getElementById("tip-form");
   
    tipSlider.addEventListener("input", function () {
        tipPercentage.value = tipSlider.value;
    });

    tipForm.addEventListener("input", function () {
        const billValue = parseFloat(billTotal.value);
        const tipValue = parseInt(tipSlider.value);
        if (!isNaN(billValue)) {
            const tipAmountValue = (billValue * tipValue) / 100;
            const totalValue = billValue + tipAmountValue;
            tipAmount.value = tipAmountValue.toFixed(2);
            totalBill.value = totalValue.toFixed(2);
        } else {
            alert('Please enter a valid number');
            return;
        }
    });
});