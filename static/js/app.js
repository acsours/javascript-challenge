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

for (var i=0; i<tableData.length; i++) {
    var new_row=tbody.append('tr');

    current_data=tableData[i]

    value_list = Object.values(current_data);
    for (var j=0; j<value_list.length; j++) {
        new_row.append('td').text(value_list[j]);
    };
};