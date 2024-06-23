document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'none';
        }
    });
});


// username and photo display

document.getElementById('createaccid').addEventListener('submit', function(event) {
    // event.preventDefault();
  
    // Default user information
    var userName = 'Surabhi B V';  
    var userProfilePhoto = '/images/joseph.jpg';  
  
    // Update navbar link
    var createAccountLink = document.getElementById('createAccountLink');
    createAccountLink.innerHTML = '<img src="' + userProfilePhoto + '" class="rounded-circle" width="30" height="30"> ' + userName;
  
    // Close the modal
    $('#signupModal').modal('hide');
});




var dropdown = document.getElementById("myDropdown1");

// Get the dropdown button
var button = document.querySelector(".dropdown1 span");

// Add an event listener to the button to toggle the dropdown content
button.addEventListener("click", function() {
dropdown.classList.toggle("show");
});