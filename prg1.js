
function ADD(a, b) 
{	 try
	{
		if(arguments.length<2)
		{
			throw "Minimum 2 parameters required";

		}
		else if(arguments.length>2)
		{
			throw "not more than 2 parameters allowed";

		}

	}
	 catch(err) {
        document.write(err);
    }

    return a + b;               
 }
 function SUB(a, b) 
{
	try
	{
		if(arguments.length<2)
		{
			throw "Minimum 2 parameters required";

		}
		else if(arguments.length>2)
		{
			throw "not more than 2 parameters allowed";

		}

	}
	 catch(err) {
        document.write(err);
    }
    return a - b;               
 }
 function MUL(a, b) 
{
	try
	{
		if(arguments.length<2)
		{
			throw "Minimum 2 parameters required";

		}
		else if(arguments.length>2)
		{
			throw "not more than 2 parameters allowed";

		}

	}
	 catch(err) {
        document.write(err);
    }
    return a * b;               
 }
 function DIV(a, b) 
{
	try
	{
		if(arguments.length<2)
		{
			throw "Minimum 2 parameters required";

		}
		else if(arguments.length>2)
		{
			throw "not more than 2 parameters allowed";

		}
		else if(arguments[1]==0)
		{
			throw "cannot divide any number with 0";
		}

	}
	 catch(err) {
        document.write(err);
    }
    return a / b;               
 }
 var x = ADD(4, 3);         
var y=SUB(5,6);
var z=DIV(10,5);
var w=MUL(10,5);

 document.write(x+"<br>");
 document.write(y+"<br>");
 document.write(z+"<br>");
 document.write(w+"<br>");
 document.write("<br>"+MUL(1,2,3,4)+"<br>");
 document.write("<br>"+DIV(11)+"<br>"+DIV(10,0));

