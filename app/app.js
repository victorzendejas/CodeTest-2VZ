//(1) Display the current day and time with the following format: Today is Sunday. The current time is 9 AM : 50 : 22
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
// document.write() writes to the document without appending a newline on the end. document.writeln() writes to the document appending a newline at the end.
document.getElementById('demo').innerHTML = ("Today is " + daylist[day] + ".");
document.getElementById('demo1').innerHTML = ("The current Time : " + hour + prepand + " : " + minute + " : " + second);

//(2)Scroll the string 'Origin Code Academy Rocks! ' from left to right by periodically (every 100 miliseconds) 
//removing one letter from the end of the string and attaching it to the front.
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}




// (3) A bubble sort, sometimes referred to as a sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// comparing each pair of adjacent items and swapping them if they are in the wrong order. 
//Array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] 
//Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] 
// Output the bubble-sorted result using a console.log statement.

var a = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] < a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);

// Make the first word of each element bold (jquery)
$('h5').each(function() {
    var me = $(this);
    me.html(me.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});

// Attach a click and a double-click event to the <p> element. For single click append the following paragraph: 
// <p>This is a click event</p> For double-click append the following paragraph: <p>This is a double-click event</p>

$("#button").bind("click", function() {
    $("<p>This is a click Event</p>").appendTo("#outcome");
});
$("#button").bind("dblclick", function() {
    $("<p>This is a double-click Event</p>").appendTo("#outcome1");
});

$("#color").on("click", function() {
    $(this).css("background", "lightblue");
});
