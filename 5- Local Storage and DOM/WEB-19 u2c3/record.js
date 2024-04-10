// fill in javascript code here
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');
//     const tbody = document.querySelector('tbody');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const employeeID = document.getElementById('employeeID').value;
//         const department = document.getElementById('department').value;
//         const experience = document.getElementById('exp').value;
//         const email = document.getElementById('email').value;
//         const mobile = document.getElementById('mbl').value;

//         const role = calculateRole(experience);

//         const newRow = `
//             <tr>
//                 <td>${name}</td>
//                 <td>${employeeID}</td>
//                 <td>${department}</td>
//                 <td>${experience}</td>
//                 <td>${email}</td>
//                 <td>${mobile}</td>
//                 <td>${role}</td>
//                 <td><button onclick="deleteRow(this)">Delete</button></td>
//             </tr>
//         `;

//         tbody.innerHTML += newRow;

//         form.reset();
//     });

//     function calculateRole(experience) {
//         if (experience > 5) {
//             return "Senior";
//         } else if (experience >= 2 && experience <= 5) {
//             return "Junior";
//         } else {
//             return "Fresher";
//         }
//     }

//     function deleteRow(btn) {
//         const row = btn.closest('tr');
//         row.parentNode.removeChild(row);
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');

    // Load data from local storage when the page loads
    loadFromLocalStorage();

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

        // Save data to local storage
        saveToLocalStorage();

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

        // After deletion, save updated data to local storage
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        const rows = tbody.querySelectorAll('tr');
        const data = [];

        rows.forEach(row => {
            const rowData = {
                name: row.cells[0].textContent,
                employeeID: row.cells[1].textContent,
                department: row.cells[2].textContent,
                experience: row.cells[3].textContent,
                email: row.cells[4].textContent,
                mobile: row.cells[5].textContent,
                role: row.cells[6].textContent
            };

            data.push(rowData);
        });

        localStorage.setItem('employeeData', JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        const storedData = localStorage.getItem('employeeData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            parsedData.forEach(data => {
                const newRow = `
                    <tr>
                        <td>${data.name}</td>
                        <td>${data.employeeID}</td>
                        <td>${data.department}</td>
                        <td>${data.experience}</td>
                        <td>${data.email}</td>
                        <td>${data.mobile}</td>
                        <td>${data.role}</td>
                        <td><button onclick="deleteRow(this)">Delete</button></td>
                    </tr>
                `;
                tbody.innerHTML += newRow;
            });
        }
    }
});
