var products = {
    '1': {
        'PRODUCT': 'nutsTAHIN',
        'GRAMS': 350,
        'COST': 5.80,
        'PROTEIN(100g)': 30,
        'CAL(100g)': 650,
    },
    '2': {
      'PRODUCT': 'afawf',
      'GRAMS': 250,
      'COST': 4.80,
      'PROTEIN(100g)': 10,
      'CAL(100g)': 350,
  }
};


function createProductRows(products) {
    var tableBody = document.getElementById("product-table-body");
    
    for (var key in products) {
        if (products.hasOwnProperty(key)) {
            var product = products[key];
            
            // Create new row
            var newRow = document.createElement("tr");
            
            // Create checkbox column
            var checkboxCell = document.createElement("td");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("click", function(event) {
                var row = event.target.closest("tr");
                if (event.target.checked) {
                    cloneRow(row);
                }
            });
            checkboxCell.appendChild(checkbox);
            newRow.appendChild(checkboxCell);
            
            // Fill other columns
            var columns = ["PRODUCT", "GRAMS", "COST", "COST( X g)", "PROTEIN(100g)", "CAL(100g)"];
            columns.forEach(function(column) {
                var cell = document.createElement("td");
                cell.textContent = product[column];
                newRow.appendChild(cell);
            });
            
            // Create form for new grams input
            var formCell = document.createElement("td");
            var gramsInput = document.createElement("input");
            gramsInput.type = "number";
            gramsInput.placeholder = "New Grams";
            gramsInput.addEventListener("input", function(event) {
                var row = event.target.closest("tr");
                var productIndex = parseInt(row.dataset.productIndex);
                updateValues(row, event.target.value, products[productIndex]);
            });
            formCell.appendChild(gramsInput);
            newRow.appendChild(formCell);
            
            // Append row to table body
            newRow.dataset.productIndex = key; // Store the product index as a data attribute
            tableBody.appendChild(newRow);
        }
    }
}

function cloneRow(row) {
    var newRow = row.cloneNode(true);
    var newTableBody = document.getElementById("cloned-product-table-body");
    newTableBody.appendChild(newRow);
}

function updateValues(row, newGrams, product) {
    var costPer100g = (product.COST / product.GRAMS) * 100;
    var proteinPer100g = product['PROTEIN(100g)'];
    var calPer100g = product['CAL(100g)'];
    
    var newCost = (costPer100g / 100) * newGrams;
    var newProtein = (proteinPer100g / 100) * newGrams;
    var newCal = (calPer100g / 100) * newGrams;
    
    var cells = row.querySelectorAll("td");
    cells[4].textContent = newCost.toFixed(2);
    cells[5].textContent = newProtein.toFixed(2);
    cells[6].textContent = newCal.toFixed(2);
}
function calculateSums() {
    var clonedTableBody = document.getElementById("cloned-product-table-body");
    var clonedRows = clonedTableBody.getElementsByTagName("tr");

    var totalCost = 0;
    var totalProtein = 0;
    var totalCal = 0;

    for (var i = 0; i < clonedRows.length; i++) {
        var cells = clonedRows[i].getElementsByTagName("td");
        totalCost += parseFloat(cells[4].textContent);
        totalProtein += parseFloat(cells[5].textContent);
        totalCal += parseFloat(cells[6].textContent);
    }

    // Update the sum values in the totals row
    var totalsRow = document.getElementById("totals-row");
    totalsRow.cells[3].textContent = totalCost.toFixed(2);
    totalsRow.cells[4].textContent = totalProtein.toFixed(2);
    totalsRow.cells[5].textContent = totalCal.toFixed(2);
}

// Call calculateSums whenever a row is cloned
function cloneRow(row) {
    var newRow = row.cloneNode(true);
    var newTableBody = document.getElementById("cloned-product-table-body");

    // Add delete button
    var deleteButtonCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        newTableBody.removeChild(newRow);
        calculateSums(); // Recalculate sums after deletion
    });
    deleteButtonCell.appendChild(deleteButton);
    newRow.appendChild(deleteButtonCell);

    newTableBody.appendChild(newRow);
    calculateSums();
}
createProductRows(products);