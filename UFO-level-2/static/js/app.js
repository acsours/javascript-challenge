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

  // clear table
  d3.selectAll('td').remove();

  // looks for the element that was changed 
  var changedInput = d3.select(this).select("input");
  // console.log(d3.event.target);


  // pulls the "id" attribute from the changed element
  var inputID = changedInput.attr("id");

  //   // pulls the value from the input field
  var inputText = changedInput.property("value");

  // checking output
  // console.log("id= " + inputID)
  // console.log("filterValue =" + inputText)

  if (inputText) {
  // then I want to cycle through the sightings and check if id matches, then filter by the value of that id
  var filteredData=tableData.filter(sighting=>sighting[inputID]===inputText)
    // console.log(filteredData);   
  }

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

