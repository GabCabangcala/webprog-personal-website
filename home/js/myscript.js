function myFunction() {
    document.getElementById("demo").innerHTML = "HELLO!";
  }

  function myFunction2() {
    const element = document.getElementsByTagName("p");
    document.getElementById("demo").innerHTML = 'PARAGRAPH CHANGED!!' + element[0].innerHTML;
  
  }