function biggerImage(id)
{
  let pict = document.getElementById(id);
  pict.width = 1.2 * pict.width;
} 
/*---- make picture smaller ----*/

function smallerImage(id) {
  let pict = document.getElementById(id);
  pict.width = pict.width / 1.2;
}

/*------Hide the Image-----*/
function Hide(id)
{
    let x = document.getElementById(id);
    if(x.style.display ==="none")
    {
        x.style.display ="block";
    }
    else{
        x.style.display ="none";
    }
}

function fun(url)    
{
  var url= document.getElementById("url").value;
  document.getElementById("theImage").setAttribute("src", url);
  makeSizer();
}

/*---- add resizing buttons and image to placeholder ----*/

function makeSizer() 
 {
 /* let image = document.createElement("iframe");
  image.setAttribute("id", "tempId");
  image.setAttribute("src", iframeUrl);
  image.setAttribute("width", iwidth);
  image.classList.add("bordered");*/



  /* find placeholder element - that's where the resizable image will go */
  let elem = document.getElementById(placeholder);

  /* create flexbox button container */
  let sizer = document.createElement("sizerbutton-container");

  /* create + and - buttons and hide buttons and set their click events */
  let buttonPlus = document.createElement("sizer-button");
  buttonPlus.appendChild(document.createTextNode('+'));
  buttonPlus.addEventListener("click", function () { biggerImage("tempId") });

  let buttonMinus = document.createElement("sizer-button");
  buttonMinus.appendChild(document.createTextNode('-'));
  buttonMinus.addEventListener("click", function () { smallerImage("tempId") });

  let hideButton = document.createElement("sizer-button");
  hideButton.appendChild(document.createTextNode('HIDE'));
  hideButton.addEventListener("click", function () { Hide("tempId")});
  elem.appendChild(sizer);
  photoBox.appendChild(image);
}