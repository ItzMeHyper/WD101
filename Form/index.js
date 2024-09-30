document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
    const dataTable = document.getElementById('dataTable');
    const clearDataButton = document.getElementById('clearData');

    const loadData = () => {
        const savedData = JSON.parse(localStorage.getItem('registrationData')) || [];
        savedData.forEach(entry => addRow(entry));
    };

    const addRow = (data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.password}</td>
            <td>${data.dob}</td>
            <td>${data.terms}</td>
            <td><button class="deleteBtn">Delete</button></td>
        `;
        dataTable.appendChild(row);

        const deleteButton = row.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', () => {
            deleteEntry(data);
        });
    };

    const deleteEntry = (dataToDelete) => {
        const savedData = JSON.parse(localStorage.getItem('registrationData')) || [];
        const updatedData = savedData.filter(data => data.email !== dataToDelete.email);
        localStorage.setItem('registrationData', JSON.stringify(updatedData));
        dataTable.innerHTML = '';
        loadData();
    };

    const validateDob = (dob) => {
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        
        return (age > 18 && age < 55) || (age === 18 && monthDiff >= 0) || (age === 55 && monthDiff <= 0);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const dob = form.dob.value;
        const terms = form.terms.checked;

        if (validateDob(dob)) {
            const registrationData = { name, email, password, dob, terms };
            addRow(registrationData);
            const savedData = JSON.parse(localStorage.getItem('registrationData')) || [];
            savedData.push(registrationData);
            localStorage.setItem('registrationData', JSON.stringify(savedData));
            form.reset();
        } else {
            alert('You must be between 18 and 55 years old.');
        }
    });

    clearDataButton.addEventListener('click', () => {
        localStorage.removeItem('registrationData');
        dataTable.innerHTML = '';
    });

    loadData();
});
