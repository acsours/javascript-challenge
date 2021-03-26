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
var header_list=['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

// I can create header_list in a simpler way:
// var variable_list=Object.keys(tableData[0]);

for (var i=0; i<tableData.length; i++) {
    var new_row=tbody.append('tr');

    current_data=tableData[i]
    for (var j=0; j<header_list.length; j++) {
            new_row.append('td').text(current_data[header_list[j]]);
        // console.log(current_data[header_list[j]])
    };
};
// ***********************************

// try this with forEach; 
// tableData.forEach(function(sighting) {
//   var new_row=tbody.append('tr');

//     // current_data=tableData[i]
//     sighting.forEach(function(item) {
//         item.append('td').text(sighting[header_list]);
//         // console.log(current_data[header_list[j]])
//     };
// });

// get reference to the button on the page
var button = d3.select("#filter-btn")
var inputField=d3.selectAll(".filter")
// get reference to the input element
// var inputField = d3.selectAll(".form-control")
// console.log(inputField)
// var form = d3.select("form")



  // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleChange);
inputField.on("change", handleChange);
// form.on("submit", handleChange);
// d3.selectAll(".filter").on("change", inputChange);


// inputField.on("change", function() {
//     var inputText=d3.event.target.value;
//     console.log(inputText);
// });

// ****************************
// This is the original, date only version that works great. 


// function handleChange(event) {
//     // prevent page from refreshing
//     d3.event.preventDefault();  
//     d3.selectAll('td').remove();
//     // this was trying to remove old data 
//     // old_data = d3.selectAll('td');
//     // console.log(old_data);

//     // select form as input element
//     // var inputElement=d3.select(".form-control");

//     // get value property from the form 
//     var inputText = inputField.property("value");
//     // console.log(inputText);    
 
//     filteredData=tableData.filter(sighting=>sighting.datetime==inputText);
//     // console.log(filteredData);

//     // loop through filteredData and append a new row 
//        for (var i=0; i<filteredData.length; i++) {
//         var new_row=tbody.append('tr');

//         current_data=filteredData[i]

//         value_list = Object.values(current_data);
//             for (var j=0; j<value_list.length; j++) {
//                     new_row.append('td').text(value_list[j]);
//                 };
//         };
//     };  
// ***********************************************

// // This is trying with multiple filter ids
// function handleChange(event) {
//     // prevent page from refreshing
//     d3.event.preventDefault();  
//     d3.selectAll('td').remove();
//     // this was trying to remove old data 
//     // old_data = d3.selectAll('td');
//     // console.log(old_data);

//     // var input_date_element=d3.select("#datetime");

//     // select any value from input
//     // var inputThing=d3.select(this).select("input");
//     // // grab the id attribute
//     // var inputID=inputThing.attr("id");
//     // var inputText = inputField.property("value");
//     // pull the id
//     // console.log(inputID);    

//     // get value property from the form 

//     var input_date_value = d3.select("#datetime").property("value");
//     var input_city_value = d3.select("#city").property("value");

//     console.log(input_date_value);    
//     console.log(input_city_value);    

//     if (input_date_value){
//       filteredData=tableData.filter(sighting=>sighting["datetime"]==input_date_value)
//       // console.log("data by date");
//       // console.log(filteredData);
//       filteredData.forEach(sighting=> {
//         var new_row=tbody.append('tr');
//         value_list=Object.values(sighting)
//         value_list.forEach(data_point => {
//           new_row.append('td').text(data_point)
//         });
//       });
//     } else if (input_city_value){
//         filteredData=tableData.filter(sighting=>sighting["city"]==input_city_value)
//       // console.log("data by date");
//       // console.log(filteredData);
//         filteredData.forEach(sighting=> {
//           var new_row=tbody.append('tr');
//           value_list=Object.values(sighting)
//           value_list.forEach(data_point => {
//             new_row.append('td').text(data_point)
//           });
//         });
//     };
//     // filteredData=tableData.filter(sighting=>sighting.datetime==inputText);
//     // console.log(filteredData);
//     // filteredData=tableData.filter(sighting=>(sighting.datetime==input_date_value && sighting.city==input_city_value));
//     // console.log(filteredData);

//     };  





// ***********************************************
// this way uses a long version to filter data...

// function handleChange(event) {
//     // prevent page from refreshing
//     d3.event.preventDefault();  
    
//     // select form as input element
//     var inputElement=d3.select(".form-control");

//     // get value property from the form 
//     var inputText = inputElement.property("value");
//     console.log(inputText);    
    
//     // loop through tableData and append a new row 
//     for (var i=0; i<tableData.length; i++) {
//         var new_row=tbody.append('tr');

//         current_data=tableData[i]

//         value_list = Object.values(current_data);
//         // console.log("value_list: ");
//         // console.log(value_list)
        
//         // if the new row's date matches the input date, append a cell with that value
//         if (value_list[0]===inputText) {
//             for (var j=0; j<value_list.length; j++) {
//                 new_row.append('td').text(value_list[j]);
//             };
//         };
//     };
// };
// ***********************************************


// Bonus notes:

// select all of the things that are possible to filter
// d3.selectAll(".filter").on("change", inputField) 

// in the handle change :
// if (inputValue)
// go through each item in the tabledata and filter by row[inputID]

// grab the id from each input field
// grab the value from the input field(s)
//  filter by your input id(s)
// use that filtered data to populate the table, as normal 

function handleChange(event) {
  // prevent page from refreshing
  d3.event.preventDefault();  
  d3.selectAll('td').remove();
  // looks for the element that was changed 
  var changedInput = d3.select(this).select("input");
  // console.log(d3.event.target);
  // select all input 

    // pulls the "id" attribute from the changed element
  var inputID = changedInput.attr("id");

  //   // pulls the value from the input field
  var inputText = changedInput.property("value");


  console.log("id= " + inputID)
  console.log("filterValue =" + inputText)

    // then I want to cycle through the sightings and check if id matches, then filter by the value of that id
  for (var k=0; k<tableData.length; k++)
    filteredData=tableData.filter(sighting=>sighting[inputID]===inputText)
      // console.log(filteredData);   
      
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

