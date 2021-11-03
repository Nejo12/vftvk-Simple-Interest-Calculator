function compute() {
    const year = new Date().getFullYear();
    let rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const principal = document.getElementById("principal");
    const principal_value = principal.value

    const interest = Number((principal_value * years * rate) / 100);
    const maturityYear = Number(years) + Number(year);

    const output = "If you deposit " + principal_value + "," + "<br>at an interest rate of " + rate + "%.<br>You will receive an amount of " + interest + "," + "<br> at year " + maturityYear + ".<br>";

    if (principal_value <= 0) {
        alert("enter a positive number")
        document.getElementById("result").innerHTML = "Please enter a positive number";
        principal.focus();
    } else {
        document.getElementById("result").innerHTML = output;
    }
}

function showRate() {
    let rate = document.getElementById("rate").value;
    rate += "%";
    document.getElementById("showRate").innerHTML = rate;
}