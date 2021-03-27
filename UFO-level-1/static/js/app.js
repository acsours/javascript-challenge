// from data.js
var tableData = data;

// Strategy:
// write a loop that will create a new table (once you search) by
// appending a row to the table for each item in the json object that has been
// returned by a filter
// that is triggered by an event (change and click ok)


// select the table body and store as a variable
var tbody = d3.select("tbody");

// store keys as a variable to use in for loop
var header_list=Object.keys(tableData[0]);

// populate table with all data
function buildTable(data) {
  for (var i=0; i<tableData.length; i++) {
    // create a new row
      var new_row=tbody.append('tr');

      current_data=tableData[i]
      for (var j=0; j<header_list.length; j++) {
        // append a cell to the end of each cell with the value of the data at the key of header list, index j
              new_row.append('td').text(current_data[header_list[j]]);
      };
  };
};

buildTable(tableData);



// get reference to the input fields on the page
var inputField=d3.selectAll(".filter")

  // We can use the `on` function in d3 to attach an event to the handler function
inputField.on("change", handleChange);



function handleChange(event) {
    // prevent page from refreshing
    d3.event.preventDefault();  
    d3.selectAll('td').remove();
    // this was trying to remove old data 
    // old_data = d3.selectAll('td');
    // console.log(old_data);

    // select form as input element
    var inputElement=d3.select(".form-control");

    // get value property from the form 
    var inputText = inputElement.property("value");
    // console.log(inputText);    
 
    filteredData=tableData.filter(sighting=>sighting.datetime==inputText);
    // console.log(filteredData);

    // loop through filteredData and append a new row 
    filteredData.forEach(record=> {
      var new_row=tbody.append('tr');
      value_list=Object.values(record)
      // console.log("value list");
      // console.log(value_list);
      value_list.forEach(data_point => {
        new_row.append('td').text(data_point)
      });
    });
};  