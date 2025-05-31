document.addEventListener("DOMContentLoaded", () => {
  const rowInput = document.getElementById("row");
  const columnInput = document.getElementById("column");
  const createTableButton = document.getElementById("createTable");
  const tableContainer = document.getElementById("tableContainer");

  createTableButton.addEventListener("click", () => {
    generateTable();
  });
  const generateTable = () => {
    if (!rowInput.value || !columnInput.value) {
      alert("Please input values");
      return;
    }
    const table = document.createElement("table");
    for (let i = 0; i < rowInput.value; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < columnInput.value; j++) {
        const column = document.createElement("td");
        column.textContent = j * rowInput.value + i + 1;
        row.appendChild(column);
      }
      table.appendChild(row);
    }
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
  };
});
