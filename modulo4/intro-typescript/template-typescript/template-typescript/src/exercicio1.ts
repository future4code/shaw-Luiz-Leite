
function checaTriangulo(a: number, b:number , c:number): String {
    
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log (checaTriangulo (10,5,10))
  console.log (checaTriangulo (10,10,10))
  console.log (checaTriangulo (10,10,5))
