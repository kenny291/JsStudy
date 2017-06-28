document.writeln("Calculator 1 + 10")
document.writeln("</p>")
var grade = 223
switch (grade) {
    case 'D': document.write("Not so good<br />");
    case 'F': document.write("Failed<br />");
    default: document.writeln("Unknown grade<br />")
}

// This is a comment. It is similar to comments in C++  
/*
* This is a multiline comment in JavaScript
* It is very similar to comments in C Programming
*/

function sayOK(vari) {
    alert(1 + 10)
    document.write(vari)
    document.write("abc".toUpperCase())
    document.write("<br />");
    //    alert(typeof 1)

    // Nested function
    // function hypotenuse(a, b) {
    //            function square(x) { return x*x; }
    //            return Math.sqrt(square(a) + square(b));
    //         }

    //         function secondFunction(){
    //            var result;
    //            result = hypotenuse(1,2);
    //            document.write ( result );
    //         }

    if (2 == 2) {
        document.write("if else")
    }
    var temp
    var count
    for (temp in navigator) {
        document.write(temp)
        document.write("<br />");
    }
    for (count = 0; count < 3; count++) {
        document.write(count)
    }

    return 12
}
//  function literal
// var func = function(x,y){ return x*y };

//         function secondFunction(){
//            var result;
//            result = func(10,20);
//            document.write ( result );
//         }

// anonymous, contructor
var func = new Function("x", "y", "return x*y;");
function secondFunction() {
    var result;
    result = func(10, 20);
    document.write(result);
}

//Event
function over() {
    alert("over")
    // document.write("Mousse over")
}
function out() {
    // alert("out")
    document.write("Mousse out")
}

function WriteCookie() {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    cookievalue = escape(document.myform.customer.value) + ";"
    // document.write(now.getDate())

    document.cookie = "name=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
    //    document.write ("Setting Cookies : " + "name=" + cookievalue );
}

function ReadCookie() {
    var allcookies = document.cookie;
    document.write("All Cookies : " + allcookies);

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');

    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        name = cookiearray[i].split('=')[0];
        value = cookiearray[i].split('=')[1];
        document.write("Key is : " + name + " and Value is : " + value);
    }
}
function Redirect() {
    window.location = "http://www.google.com"
}
// document.write("Redirect afer 3s")
// setTimeout(Redirect(), 3000);

// var browsername = navigator.appName
// if (browsername == "Netscape") {
//     window.location = "http://www.location.com/ns.htm";
// }
// else if (browsername == "Microsoft Internet Explorer") {
//     window.location = "http://www.location.com/ie.htm";
// }
// else {
//     window.location = "http://www.location.com/other.htm";
// }

// Confirmation Dialog Box
function getConfirmation() {
    var retVal = confirm("Do you want to continue ?");
    if (retVal == true) {
        document.write("User wants to continue!");
        return true;
    }
    else {
        document.write("User does not want to continue!");
        return false;
    }
}

// Prompt Dialog Box
function getValue() {
    var retVal = prompt("Enter your name : ", "your name here");
    document.write("You have entered : " + retVal);
}
