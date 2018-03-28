
  var myImage1 = document.getElementById('primeImage');
  var myImage = document.getElementById('mainImage');
  var myImage3 = document.getElementById('secondImage');

  var imageArray = ["img/micauane.jpg","img/Weslny.jpg","img/Gustavo.jpg","img/Edwardes.jpg","img/romulo.jpg","img/viviele.jpg"];
  var imageAnt = 0
  var imageIndex = 1;
  var imageDep = 2

  function chanceImage(){

    myImage1.setAttribute("src", imageArray[imageAnt]);
    myImage.setAttribute("src", imageArray[imageIndex]);
    myImage3.setAttribute("src", imageArray[imageDep]);

    if(imageIndex == 0){
      document.getElementById("demo3").innerHTML = "Viviele";
      document.getElementById("demo").innerHTML = "Micauane";
      document.getElementById("demo2").innerHTML = "Weslany";

    }
    else if (imageIndex == 1) {
      document.getElementById("demo3").innerHTML = "Micauane";
      document.getElementById("demo").innerHTML = "Weslany";
      document.getElementById("demo2").innerHTML = "Gustavo";

    }
    else if (imageIndex == 2) {
      document.getElementById("demo3").innerHTML = "Weslany";
      document.getElementById("demo").innerHTML = "Gustavo";
      document.getElementById("demo2").innerHTML = "Edwardes";

    }
    else if (imageIndex == 3) {
      document.getElementById("demo3").innerHTML = "Gustavo";
      document.getElementById("demo").innerHTML = "Edwardes";
      document.getElementById("demo2").innerHTML = "Romulo";

    }
    else if (imageIndex == 4) {
      document.getElementById("demo3").innerHTML = "Edwardes";
      document.getElementById("demo").innerHTML = "Romulo";
      document.getElementById("demo2").innerHTML = "Viviele";

    }
    else if (imageIndex == 5) {
      document.getElementById("demo3").innerHTML = "Romulo";
      document.getElementById("demo").innerHTML = "Viviele";
      document.getElementById("demo2").innerHTML = "Micauane";
    }


    imageAnt++;
    imageIndex++;
    imageDep++;

    if(imageIndex > 5){
      imageIndex = 0;
    }
    else if (imageAnt > 5) {
      imageAnt = 0;
    }
    else if (imageDep > 5) {
      imageDep = 0;
    }

  }
