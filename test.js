function changePicture(){
  var yourImages = ["images/handler 5.png","images/handler3.png ","handler2.png"];
  var randomImage = Math.round(Math.random()*yourImages.length);
  var setImg = document.getElementById("handlerbus").src;
  setImg = yourImages[randomImage];
 }
