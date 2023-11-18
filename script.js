function validateForm() {
    var phoneNumberInput = document.getElementById("phoneNumber").value;
  
    if (phoneNumberInput.trim() === "") {
        alert("Phone number cannot be blank");
        return;
    }
  
    var phoneRegex = /^[0-9-]+$/;
    if (!phoneRegex.test(phoneNumberInput)) {
        alert("Invalid phone number. Please use only numbers and dashes.");
        return;
    }
  
    var sanitizedPhoneNumber = phoneNumberInput.replace(/[^0-9-]/g, '');
  
    alert("Valid phone number: " + sanitizedPhoneNumber);
    console.log("Valid phone number: " + sanitizedPhoneNumber);
  
    
    submitForm(sanitizedPhoneNumber);
}

function submitForm(sanitizedPhoneNumber) {
    
    console.log("Form submitted with sanitized phone number: " + sanitizedPhoneNumber);
}
