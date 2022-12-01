
// Defina um array vazio que armazena os nomes dos alunos.
   nameOfTheStudentArray = [];
function submit()
{
    //defina um array que guarda todos os nomes dos alunos
    var displayStudentArray = [];
    //defina loop for para buscar o valor da caixa de entrada e guardar no array.
   for (var j = 1; j <= 4; j++)
   {
    var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
    console.log(nameOfTheStudent);
    nameOfTheStudentArray.push(nameOfTheStudent);
   }
    //Imprima o valor de nameOfTheStudent na tela do console
    console.log(nameOfTheStudentArray);
   //length do array e guardamos dentro da variável
   var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.lenght;
   console.log(lenghtOfNameOfStudentsArray);

   for (var k = 0; k < lenghtOfNameOfStudentsArray; k++)
   {
    displayStudentArray.push("<h4>NOME -"+ nameOfTheStudentArray[k] + "</h4>");
    console.log(displayStudentArray);
   }
    //vamos imprimir a length do array na tela do console
   console.log(displayStudentArray);
    //Repetimos a nameOfTheStudentArray
   document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;
    //imprima displayStudentArray na tela do console
   var removeCommas = displayStudentArray.join(" ");
   
    //Imprima esse displayStudentArray dentro do elemento HTML.
    console.log(removeCommas);
    //Defina uma variável e armazene displayStudentArray com uma função join
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    //imprima o array e verifique o resultado
   
    //Imprima removeCommas dentro do elemento HTML
    
    //Ocultar botão Enviar 
   document.getElementById("submitButton").style.display = "none";
}
