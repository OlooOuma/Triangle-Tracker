function run() {
var inp1=document.getElementById("lengthA").value;
var inp2=document.getElementById("lengthB").value;
var inp3=document.getElementById("lengthC").value;
var sideA=parseInt(inp1);
var sideB=parseInt(inp2);
var sideC=parseInt(inp3);
if (sideA === sideB && sideB === sideC && sideC === sideA){
  alert("EQUILATERAL TRAIANGLE");
}
else if (sideA === sideB && sideA !== sideC) {
  alert("ISOSCELES TRIANGLE");
}else if (sideA === sideC && sideA !== sideB) {
  alert("ISOSCELES TRAIANGLE");
}else if (sideB === sideC && sideB !== sideA) {
  alert("ISOSCELES  TRAIANGLE");
}else if (sideA !== sideB && sideB !== sideC && sideA !== sideC && sideA + sideB > sideC && sideB + sideC > sideA){
  alert("SCALENE TRIANGLE");
}else if (sideA + sideB <= sideC) {
  alert ("NOT A TRIANGLE");
}else if (sideA + sideC <=sideB) {
  alert ("NOT A TRIANGLE");
}else if (sideB + sideC <=sideA)  {
  alert ("NOT A TRIANGLE");
}
}
