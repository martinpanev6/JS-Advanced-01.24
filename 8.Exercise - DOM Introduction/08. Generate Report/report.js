function generateReport() {
    const checkboxes = document.querySelectorAll('th input[type="checkbox"]');
            const rows = document.querySelectorAll('tbody tr');
            const reportArray = [];

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                const rowData = {};

                for (let j = 0; j < checkboxes.length; j++) {
                    const checkbox = checkboxes[j];

                    if (checkbox.checked) {
                        const columnName = checkbox.getAttribute('name');

                        const cellContent = row.cells[j].textContent;
                        rowData[columnName] = cellContent;
                    }
                }
                reportArray.push(rowData);
            }

            const jsonReport = JSON.stringify(reportArray, null, 2);

            document.getElementById('output').value = jsonReport;
}