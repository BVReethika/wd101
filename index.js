document.getElementById("Registration Form").addEventListener("submit",function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;

    const age =  calculateAge(dob);

    if(age < 18 || age > 55 ){
        alert('Your age must be between 18 and 55 years.');
    return;
    }

    if(name && email && password && dob && termsAccepted) {
        const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell = newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        const termsCell = newRow.insertCell(4);

        nameCell.textContent = name;
        emailCell.textContent = email;
        passwordCell.textContent = password;
        dobCell.textContent = dob;
        termsCell.textContent = termsAccepted ? 'Yes' : 'No';

        document.getElementById('RegistrationForm').reset();
    }else{
        alert('Please fill in all fields and accept terms.');
    }
    });


    function calculateAge(dob) {
        const birthDate =  new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
