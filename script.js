
window.onload = function () {
  document.getElementById("theImage").onclick = function(){
    changeImage();
  }

}
var i = 0;

function changeImage(){
  var list = ["familypic.jpg", "IMG_6644.jpg","download.jpg","DSC_0384_preview.jpg"];
  i++;
  if (i > 3){
    i = 0;
  }
  var newImg = list[i];
  document.getElementById("theImage").src = newImg;

}
