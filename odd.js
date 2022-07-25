//find the sum of odd & even number
//within the range
a=parseInt(prompt("Enter the first number"));
b=parseInt(prompt("Enter the second number"));
esum=osum=0;
enu=onu="";
for(i=a;i<=b;i++){
    if((i%2)==0){
    esum+=i;
    enu+=i.toString()+" "
}
else
osum+=i;
onu+=i+" "

}
 document.write("<br /> the even numbers are"+enu + " = "+esum)
 document.write("<br /> the odd numbers are"+onu + " = "+osum)
