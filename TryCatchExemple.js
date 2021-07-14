function check() {

  var input = document.getElementById("number");
  var inputValue = input.value;
  var mesage = document.getElementById("msg");
  var mesageParent = mesage.parentElement;

  try {
    if (inputValue == "") {
      throw "Type a number";
    }
    if (isNaN(inputValue)) {
      throw "Ops! That is not a number.";
    }
    if (inputValue > 10 && inputValue < 20) {
      mesage.innerText = "Congrats!";
      mesageParent.className = "alert alert-sucess";

    } else {
      mesage.innerText = `Error: Not a valid number, try using something from 10 to 20.`;
      mesageParent.className = "alert alert-danger";
    }
  } 
  catch (error) {
    mesage.innerText = `Error: ${error}`;
    mesageParent.className = "alert alert-danger";
  } 
  finally {
    conclusionMesage = document.getElementById("conclusion");
    conclusionMesage.innerText = "Thanks for your attention :)";
    conclusionMesage.className = "alert alert-primary";
  }
  input.value = "";
}
