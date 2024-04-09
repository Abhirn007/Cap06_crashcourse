// record.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form inputs
    var name = document.getElementById('name').value;
    var empId = document.getElementById('empId').value;
    var department = document.getElementById('department').value;
    var experience = parseInt(document.getElementById('experience').value);
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    
    // Determine role based on experience
    var role;
    if (experience > 5) {
      role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      role = 'Junior';
    } else {
      role = 'Fresher';
    }
    
    // Create a new table row
    var table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    
    // Add cells to the row
    newRow.insertCell().appendChild(document.createTextNode(name));
    newRow.insertCell().appendChild(document.createTextNode(empId));
    newRow.insertCell().appendChild(document.createTextNode(department));
    newRow.insertCell().appendChild(document.createTextNode(experience));
    newRow.insertCell().appendChild(document.createTextNode(email));
    newRow.insertCell().appendChild(document.createTextNode(mobile));
    newRow.insertCell().appendChild(document.createTextNode(role));
    
    // Add delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
      var rowIndex = this.parentNode.parentNode.rowIndex;
      table.deleteRow(rowIndex);
    };
    newRow.insertCell().appendChild(deleteButton);
  }
  
  // Add form submit event listener
  document.getElementById('employeeForm').addEventListener('submit', handleSubmit);
  