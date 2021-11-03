function compute() {
    const year = new Date().getFullYear();
    let rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const principal = document.getElementById("principal").value;

    const interest = Number((principal * years * rate) / 100);
    const maturityYear = Number(years) + Number(year);

    const output = "If you deposit " + principal + "," + "<br>at an interest rate of " + rate + "%.<br>You will receive an amount of " + interest + "," + "<br> at year " + maturityYear + ".<br>";

    if (principal <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount";
    } else {
        document.getElementById("result").innerHTML = output;
    }
}

function showRate() {
    let rate = document.getElementById("rate").value;
    rate += "%";
    document.getElementById("showRate").innerHTML = rate;
}