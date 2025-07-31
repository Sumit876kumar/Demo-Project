let Birthdate = document.getElementById('Birthdate');
let result = document.getElementById('result');
let form = document.getElementById('form'); 

form.addEventListener('submit', function(event){
    event.preventDefault();

    let birthDate = new Date(Birthdate.value);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

     if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
});