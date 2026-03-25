// View details button
function viewDetails(name) {
    alert(`Viewing details for ${name}`);
}

//Edit button
function editContact(name) {
    alert(`Edit contact for ${name}`);
}

// Delete button
function confirmDelete(name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        alert(`${name} has been deleted.`);
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
    
//popup message
    alert(`New employee added successfully`);
    document.querySelector('form').reset();
}
