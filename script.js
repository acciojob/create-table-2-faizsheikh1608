function createTable() {
  // Get the table element by its ID
  const table = document.getElementById('myTable');
  
  // Clear the table in case it already has rows or columns
  table.innerHTML = '';

  // Prompt the user to input the number of rows
  const rows = parseInt(prompt('Input number of rows'), 10);

  // Prompt the user to input the number of columns
  const cols = parseInt(prompt('Input number of columns'), 10);

  // Validate user inputs
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert('Please enter valid positive integers for rows and columns.');
    return;
  }

  // Create the table rows and columns dynamically
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow(); // Create a new row
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell(); // Create a new cell in the row
      cell.textContent = `Row-${i} Column-${j}`; // Set the cell text
    }
  }
}
