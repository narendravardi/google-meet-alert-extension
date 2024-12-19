// Show an alert when the user reloads the page
window.addEventListener('beforeunload', (event) => {
    // Custom alert message
    const message = "Are you sure you want to reload Google Meet?";
    event.preventDefault();
    event.returnValue = message; // Some browsers use this for displaying the alert
    return message;
  });
  