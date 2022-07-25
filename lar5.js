//Largest of 5 numbers
a=parseInt(prompt("Enter the first number"));
b=parseInt(prompt("Enter the second number"));
c=parseInt(prompt("Enter the third number"));
d=parseInt(prompt("Enter the four number"));
e=parseInt(prompt("Enter the five number"));
 
lar=a;
if(b>lar)
lar=b;
if(c>lar)
lar=c;
if(d>lar)
lar=d;
if(e>lar)
lar=e;
alert("The largest NUmber is : " + lar);