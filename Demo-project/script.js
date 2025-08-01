let loanAmount = document.getElementById("loanAmount");
let tenure = document.getElementById("tenure");
let interest = document.getElementById("interest");

let loanAmountVal = document.getElementById("loanAmountVal");
let tenureVal = document.getElementById("tenureVal");
let interestVal = document.getElementById("interestVal");
let emiDisplay = document.getElementById("emi");

function calculateEMI(P, N, R) {
      let r = R / (12 * 100);
      let emi = P * r * Math.pow(1 + r, N) / (Math.pow(1 + r, N) - 1);
      return Math.round(emi);
}

function updateValues() {
      let P = parseInt(loanAmount.value);
      let N = parseInt(tenure.value);
      let R = parseFloat(interest.value);

      loanAmountVal.textContent = P.toLocaleString("en-IN");
      tenureVal.textContent = N;
      interestVal.textContent = R;

let emi = calculateEMI(P, N, R);
     emiDisplay.textContent = emi.toLocaleString("en-IN");
}

loanAmount.addEventListener("input", updateValues);
tenure.addEventListener("input", updateValues);
interest.addEventListener("input", updateValues);

updateValues();