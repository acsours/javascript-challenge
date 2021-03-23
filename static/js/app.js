// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);


// write a loop that will create a new table (once you search) by
// appending a row to the table for each item in the json object that has been
// returned by a filter
// that is triggered by an event (change and click ok)

// step 1: loop through "tableData " and concole log each ufo sighting
// for (var i=0; i<tableData.length; i++) {
//     console.log(tableData[i])
// };

// step 2: use d3 to append one table row for each UFO sigting
var tbody = d3.select("tbody");

// // ***********************************
  // this shows the entire table as is --> we will use this to populate first
// If you want to account for disorganized data, do it this way:
var header_list=['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']


for (var i=0; i<tableData.length; i++) {
    var new_row=tbody.append('tr');

    current_data=tableData[i]
    for (var j=0; j<header_list.length; j++) {
            new_row.append('td').text(current_data[header_list[j]]);
        // console.log(current_data[header_list[j]])
    };
};
// ***********************************

// get reference to the button on the page
var button = d3.select("#filter-btn")

// get reference to the input element
// var inputField = d3.select(".form-control")
var form = d3.select("form")


// testing button

// function handleClick() {
//     console.log("A button was clicked!");
  
//     // We can use d3 to see the object that dispatched the event
//     console.log(d3.event.target);
//   }
  
  // We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleChange);
form.on("submit", handleChange);


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
//     var inputElement=d3.select(".form-control");

//     // get value property from the form 
//     var inputText = inputElement.property("value");
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

// This is trying with multiple filter ids
function handleChange(event) {
    // prevent page from refreshing
    d3.event.preventDefault();  
    d3.selectAll('td').remove();
    // this was trying to remove old data 
    // old_data = d3.selectAll('td');
    // console.log(old_data);

    // select date form as input element
    var input_date_element=d3.select("#datetime");
    var input_city_element=d3.select("#city");

    // get value property from the form 
    var input_date_value = input_date_element.property("value");
    var input_city_value = input_city_element.property("value");

    // console.log(input_date_value);    
    // console.log(input_city_value);    

    filteredData=tableData.filter(sighting=>(sighting.datetime==input_date_value && sighting.city==input_city_value));
    // console.log(filteredData);

    // loop through filteredData and append a new row 
       for (var i=0; i<filteredData.length; i++) {
        var new_row=tbody.append('tr');

        current_data=filteredData[i]

        value_list = Object.values(current_data);
            for (var j=0; j<value_list.length; j++) {
                    new_row.append('td').text(value_list[j]);
                };
        };
    };  





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

// inputField.on("change", handleChange)
// button.on("click", handleChange)
// // ***********************************
  // this shows the entire table as is --> we will use this to 
// fill a table based on data that has been filtered
// for (var i=0; i<tableData.length; i++) {
//     var new_row=tbody.append('tr');

//     current_data=tableData[i]

//     value_list = Object.values(current_data);
//     // console.log("value_list: ");
//     // console.log(value_list)
//     if (value_list[0]===inputText) {
//         for (var j=0; j<value_list.length; j++) {
//             new_row.append('td').text(value_list[j]);
//         };
//     };
// };
// // ***********************************




// value_list = Object.values(tableData)
// filtered_data=[]

// tableData.forEach(sighting => {
//     if (sighting["date"]==="1/1/2010") {
//         filtered_data.push(sighting)
//     };
// });

// console.log(filtered_data);

