function run() {
    var inp1=document.getElementById("lengthA").value;
    var inp2=document.getElementById("lengthB").value;
    var inp3=document.getElementById("lengthC").value;
    var sideA=parseInt(inp1);
    var sideB=parseInt(inp2);
    var sideC=parseInt(inp3);

if (sideA === sideB && sideB === sideC && sideC === sideA){
      alert("Equilateral Triangle")
    }
  else if (sideA === sideB && sideA !== sideC) {
    alert("Isosceles Triangle")
  }
  else if (sideA === sideC && sideA !== sideB) {
    alert("Isosceles Triangle")
  }
  else if (sideB === sideC && sideB !== sideA) {
    alert("Isosceles Triangle")
  }
  else if (sideA !== sideB && sideB !== sideC && sideA !== sideC && sideA + sideB> sideC && sideB + sideC> sideA) {
    alert("Scalene Triangle")
  }
  else if (sideA + sideB <== sideC) {
    alert("TRY AGAIN")
  }
  else if (sideB + sideC<== sideA) {
    alert("TRY AGAIN")
  }
  else if(sideA + sideC<== sideB){
    alert("TRY AGAIN")
  }

  }
