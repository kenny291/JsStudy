    document.writeln("Calculator 1 + 10")
    document.writeln("</p>")
    var grade = 223
    switch (grade)
            {
               case 'D': document.write("Not so good<br />");
               case 'F': document.write("Failed<br />");
               default: document.writeln("Unknown grade<br />")
            }

			  // This is a comment. It is similar to comments in C++  
			  /*
			  * This is a multiline comment in JavaScript
			  * It is very similar to comments in C Programming
			  */

    function sayOK(vari){
       alert(1+10)
       document.write(vari)
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

    if (2==2){
        document.write("if else")
    } 
    var temp
    var count
    for (temp in navigator){
        document.write(temp)
        document.write("<br />");
    }
    for (count = 0; count < 3;count++) {
        document.write(count)
    }


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
            function secondFunction(){
               var result;
               result = func(10,20);
               document.write ( result );
            }