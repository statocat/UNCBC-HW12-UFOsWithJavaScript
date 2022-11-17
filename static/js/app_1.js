// import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append('td');
            cell.text(val);
        }
        );
    }
    );
}

// make button to select date
function handleClick() {
    let date = d3.select("#datetime").property("value");
    
    // initialize table to hold all available data
    let filteredData = tableData;

    // add filter based on single selected date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // refresh table with only data that matches date filter
    buildTable(filteredData);
};

// listen for button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);