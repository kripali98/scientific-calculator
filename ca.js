function add()
{
	document.cal.display.value+="+";
	document.cal.display.style.textAlign="right";
}
function sub()
{
	document.cal.display.value+="-";
	document.cal.display.style.textAlign="right";
}
function div()
{
	document.cal.display.value+="/";
	document.cal.display.style.textAlign="right";
}
function mul()
{
	document.cal.display.value+="*";
	document.cal.display.style.textAlign="right";
}
function mod()
{
	document.cal.display.value+="%";
	document.cal.display.style.textAlign="right";
}
function dec()
{
	document.cal.display.value+=".";
	document.cal.display.style.textAlign="right";
}
function clr()
{
	document.cal.display.value="";
	document.cal.display.style.textAlign="right";
}
function log()
{
document.cal.display.value=Math.log(document.cal.display.value).toFixed(4);
document.cal.display.style.textAlign="right";
}
function func()
{
	var s=eval(document.cal.display.value);
	if(s==Math.floor(s)&&s==Math.ceil(s))
	{
		return s;
	}
	else
		return s.toFixed(4);
}
function sqrt()
{
		var s=Math.sqrt(document.cal.display.value);
	if(s==Math.floor(s)&&s==Math.ceil(s))
	{
		document.cal.display.value=s;
	}
	else
	document.cal.display.value=s.toFixed(4);
document.cal.display.style.textAlign="right";
}
function inverse()
{
	var n=document.cal.display.value;
var s=1/n;
if(s==Math.floor(s)&&s==Math.ceil(s))
	{
		document.cal.display.value=s;
	}
	else
	document.cal.display.value=s.toFixed(4);
    document.cal.display.style.textAlign="right";
}
function sqr()
{
	var s=Math.pow(document.cal.display.value,2);
	if(s==Math.floor(s)&&s==Math.ceil(s))
	{
		document.cal.display.value=s;
	}
	else
	document.cal.display.value=s.toFixed(4);
document.cal.display.style.textAlign="right";
}	
function change()
{
document.cal.display.value=document.cal.display.value*-1;
document.cal.display.style.textAlign="right";
}
function ceil()
{
document.cal.display.value=Math.ceil(document.cal.display.value);
document.cal.display.style.textAlign="right";
}
function floor()
{
document.cal.display.value=Math.floor(document.cal.display.value);
document.cal.display.style.textAlign="right";
}
function sin()
{
document.cal.display.value=Math.sin(document.cal.display.value).toFixed(4);
document.cal.display.style.textAlign="right";
}
function cos()
{
document.cal.display.value=Math.cos(document.cal.display.value).toFixed(4);
document.cal.display.style.textAlign="right";
}
function tan()
{
document.cal.display.value=Math.tan(document.cal.display.value).toFixed(4);
document.cal.display.style.textAlign="right";
}
function abs()
{
document.cal.display.value=Math.abs(document.cal.display.value);
document.cal.display.style.textAlign="right";
}
function fact()
{
	var f=1;
	var n=document.cal.display.value;
	var s=n;
	if((s==Math.floor(s)&&s==Math.ceil(s))&&(s>=0))
	{
if(n==0||n==1)
document.cal.display.value=f;
else
{
	for(var i=n;i>=2;i--)
	{
		f=f*n;
	}
	document.cal.display.value=f;
}
	}
	else
	{
		document.cal.display.value="Error";
	}
document.cal.display.style.textAlign="right";
}
function f1()
{
	var n=document.cal.display.value;
	var t=n.substr(n.length-1,n.length);
	if(t=='+'||t=='-'||t=='/'||t=='*'||t=='-'||n==''||n==0)
		document.cal.display.value+=Math.PI.toFixed(4);
	else
	{
		n*=Math.PI.toFixed(4);
document.cal.display.value=n.toFixed(4);
	}
}
function f2()
{
	var n=document.cal.display.value;
	var t=n.substr(n.length-1,n.length);
	if(t=='+'||t=='-'||t=='/'||t=='*'||t=='-'||n==''||n==0)
	{	
	document.cal.display.value+=Math.E.toFixed(4);
	}
	else
	{
n*=Math.E.toFixed(4);
document.cal.display.value=n.toFixed(4);
	}
}