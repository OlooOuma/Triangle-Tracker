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
    alert("Isocseles Triangle")
  }

  }
