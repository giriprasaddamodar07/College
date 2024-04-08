// Get all department list items
const departmentItems = document.querySelectorAll('#departments li');

// Add click event listener to each department item
departmentItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the text content of the clicked department
    const departmentName = item.textContent;
    // Display an alert with the department name
    alert(`You clicked on the ${departmentName} department!`);
  });
});
