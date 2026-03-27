//Employee details array
let employees = [];
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
} else {
    employees = [
        {
            id: 1,
            fullName: "Dr. Alice Muthoni",
            idNumber: "ID004",
            phone: "+254 712345678",
            email: "alice.muthoni@company.com",
            position: "Human Resource",
            gender: "female",
            firstName: "Alice",
            lastName: "Muthoni"
        },
        {
            id: 2,
            fullName: "Eng. Peter Kariuki",
            idNumber: "ID008",
            phone: "+254 723456789",
            email: "peter.kariuki@company.com",
            position: "System Developer",
            gender: "male",
            firstName: "Peter",
            lastName: "Kariuki"
        },
        {
            id: 3,
            fullName: "Prof. Susan Wairimu",
            idNumber: "ID012",
            phone: "+254 734567890",
            email: "susan.wairimu@company.com",
            position: "Branch Manager",
            gender: "female",
            firstName: "Susan",
            lastName: "Wairimu"
        },
        {
            id: 4,
            fullName: "CPA John Njoroge",
            idNumber: "ID016",
            phone: "+254 745678901",
            email: "john.njoroge@company.com",
            position: "Account Manager",
            gender: "male",
            firstName: "John",
            lastName: "Njoroge"
        },
        {
            id: 5,
            fullName: "Eng. Joseph Maina",
            idNumber: "ID020",
            phone: "+254 756789012",
            email: "joseph.maina@company.com",
            position: "Web Designer",
            gender: "male",
            firstName: "Joseph",
            lastName: "Maina"
        }
    ];
    localStorage.setItem('employees', JSON.stringify(employees));
}

// View details button
function viewDetails(button, name) {
    let row = button.closest('tr');
    let cells = row.getElementsByTagName('td');
    let id = cells[2].innerText;
    let phone = cells[3].innerText;
    let email = cells[4].innerText;
    alert(`Employee Details:\n\nName: ${name}\nID: ${id}\nPhone: ${phone}\nEmail: ${email}`);
}
//Edit button
function editContact(button, name) {
    let row = button.closest('tr');
    let cells = row.getElementsByTagName('td');
    let newPhone = prompt(`Edit phone for ${name}:`, cells[3].innerText);
    let newEmail = prompt(`Edit email for ${name}:`, cells[4].innerText);
    if (newPhone && newEmail) {
        cells[3].innerText = newPhone;
        cells[4].innerText = newEmail;
        let employee = employees.find(emp => emp.fullName === name);
        if (employee) {
            employee.phone = newPhone;
            employee.email = newEmail;
            localStorage.setItem('employees', JSON.stringify(employees));
        }
        alert(`${name} has been updated!`);
    }
}

// Delete button
function confirmDelete(button, name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        let row = button.closest('tr');
        if (row) {
            row.remove();
            alert(`${name} has been deleted.`);
        } else {
            alert(`${name} has been deleted.`);
        }
    }
}
     
// Submit button
function handleFormSubmit(event) {
    event.preventDefault();
    let idNumber = document.getElementById('IDNumber').value;     
    let firstName = document.getElementById('FirstName').value;    
    let lastName = document.getElementById('LastName').value;     
    let phone = document.getElementById('Phone').value;           
    let email = document.getElementById('Email').value;           
    let position = document.getElementById('position').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let genderValue = gender ? gender.value : 'Not selected'; 
    
     if (!gender) {
        alert('Please select a gender');
        return;
     }

// Create new employee 
     let newEmployee = {
        id: employees.length + 1,
        idNumber: idNumber,
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + ' ' + lastName,
        gender: genderValue,
        phone: phone,
        email: email,
        position: position
    };   
    
//popup message
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
    alert(`${firstName} ${lastName} has been added successfully`);
    document.querySelector('form').reset();
}

//Load employees
function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let tbody = document.querySelector('#employeeTable tbody');    
    if (tbody) {
        tbody.innerHTML = '';
        employees.forEach((emp, index) => {
            let row = tbody.insertRow();
            row.innerHTML = `
                 <td>${index + 1}</td>
                 <td>${emp.fullName}</td>
                 <td>${emp.idNumber || 'N/A'}</td>
                 <td>${emp.phone}</td>
                 <td>${emp.email}</td>
                 <td>${emp.position}</td>
                <td class="tools">
                    <button class="btn-details" onclick="viewDetails(this, '${emp.fullName}')">Details</button>
                    <button class="btn-edit" onclick="editContact(this, '${emp.fullName}')">Edit</button>
                    <button class="btn-delete" onclick="confirmDelete(this, '${emp.fullName}')">Delete</button>
                </td>
            `;
        });
    }
}
if (document.querySelector('#employeeTable')) {
    loadEmployees();
}