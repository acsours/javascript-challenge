// from data.js
var tableData = data;

// write a loop that will create a new table (once you search) by
// appending a row to the table for each item in the json object that has been
// returned by a filter
// that is triggered by an event (change and click ok)

var tbody = d3.select("tbody");

// // ***********************************
  // this shows the entire table as is --> we will use this to populate first
// If you want to account for disorganized data, do it this way:
// var header_list=['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

// I can create header_list in a simpler way:
var header_list=Object.keys(tableData[0]);

function buildTable(data) {
  for (var i=0; i<tableData.length; i++) {
      var new_row=tbody.append('tr');

      current_data=tableData[i]
      for (var j=0; j<header_list.length; j++) {
              new_row.append('td').text(current_data[header_list[j]]);
      };
  };
};

buildTable(tableData)

// get reference to the input fields on the page

var inputField=d3.selectAll(".filter")
// var form=d3.select("form")

  // We can use the `on` function in d3 to attach an event to the handler function
inputField.on("change", handleChange);

// form.on("change", handleChange);

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
    console.log("value list");
    console.log(value_list);
    value_list.forEach(data_point => {
      new_row.append('td').text(data_point)
    });
  });
};

