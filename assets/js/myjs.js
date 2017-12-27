function onclick2(id){
	var ele=document.getElementById(id)
	console.log(ele)
	if (ele.style.display == "")
	  ele.style.display= "none"
	else 
		ele.style.display=""
	}

var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    myIndex++;
    
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();
function carousel2() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    myIndex2++;
    
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2-1].style.display = "block";  
    setTimeout(carousel2, 6000); // Change image every 2 seconds
}

/*

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
*/
// Modal Image Gallery
function onClick1(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.fontSize = "25px";
  document.getElementById("modal01").style.fontWeight = "600";
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

