// fill in javascript code here
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const employeeID = document.getElementById('employeeID').value;
        const department = document.getElementById('department').value;
        const experience = document.getElementById('exp').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mbl').value;

        const role = calculateRole(experience);

        const newRow = `
            <tr>
                <td>${name}</td>
                <td>${employeeID}</td>
                <td>${department}</td>
                <td>${experience}</td>
                <td>${email}</td>
                <td>${mobile}</td>
                <td>${role}</td>
                <td><button onclick="deleteRow(this)">Delete</button></td>
            </tr>
        `;

        tbody.innerHTML += newRow;

        form.reset();
    });

    function calculateRole(experience) {
        if (experience > 5) {
            return "Senior";
        } else if (experience >= 2 && experience <= 5) {
            return "Junior";
        } else {
            return "Fresher";
        }
    }

    function deleteRow(btn) {
        const row = btn.closest('tr');
        row.parentNode.removeChild(row);
    }
});
e