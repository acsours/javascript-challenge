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

// var newRow=tbody.append('tr');
// newRow.append('td').text('1/1/2010');
// newRow.append('td').text('benton');
// newRow.append('td').text('ar');
// newRow.append('td').text('us');
// newRow.append('td').text('circle');
// newRow.append('td').text('2 minutes');
// newRow.append('td').text('4 bright green circles high in the sky going in circles then one bright green light at my front door.');

// get reference to the button on the page
var button = d3.select("#filter-btn")

// get reference to the input element
var inputField = d3.select(".form-control")


// testing button

function handleClick() {
    console.log("A button was clicked!");
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
  }
  
  // We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// function handleInput() {
//     var inputText=d3.event.target.value;
//     console.log(inputText);
// };

// inputField.on("change", function() {
//     var inputText=d3.event.target.value;
//     console.log(inputText);
// });



function handleChange(event) {
    var inputText=d3.event.target.value;
    console.log(inputText);    
    
    for (var i=0; i<tableData.length; i++) {
        var new_row=tbody.append('tr');

        current_data=tableData[i]

        value_list = Object.values(current_data);
        // console.log("value_list: ");
        // console.log(value_list)
        if (value_list[0]===inputText) {
            for (var j=0; j<value_list.length; j++) {
                new_row.append('td').text(value_list[j]);
            };
        };
    };
};


inputField.on("change", handleChange)
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
// // ***********************************
// // If you want to account for disorganized data, do it this way instead:
// var header_list=['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']


// for (var i=0; i<tableData.length; i++) {
//     var new_row=tbody.append('tr');

//     current_data=tableData[i]
//     for (var j=0; j<header_list.length; j++) {
//             new_row.append('td').text(current_data[header_list[j]]);
//         // console.log(current_data[header_list[j]])
//     };
// };
// // ***********************************


// for (var i=0; i<tableData.length; i++) {
//     var new_row=tbody.append('tr');

//     current_data=tableData[i]
//     filtered_data=[]

//     // if the value at date matches the string, push to filtered data, 
//     // then show only filtered data


// };
    // if yes, then append the Object.values.tableData[i]
//     value_list = Object.values(current_data);


//     for (var j=0; j<value_list.length; j++) {
//         new_row.append('td').text(value_list[j]);
//     };
// };


// value_list = Object.values(tableData)
// filtered_data=[]

// tableData.forEach(sighting => {
//     if (sighting["date"]==="1/1/2010") {
//         filtered_data.push(sighting)
//     };
// });

// console.log(filtered_data);

