//your JS code here. If required.
 // Get references to the counter paragraph and the increment button
  const counterParagraph = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementBtn');

  // Function to increment the counter value and display an alert
  function incrementCounter() {
    // Get the current counter value
    let currentValue = parseInt(counterParagraph.textContent);
    // Display an alert with the current value
    alert("Current Counter Value: " + currentValue);
    // Increment the counter value
    currentValue++;
    // Update the counter paragraph with the new value
    counterParagraph.textContent = currentValue;
  }

  // Attach click event listener to the increment button
  incrementButton.addEventListener('click', incrementCounter);
