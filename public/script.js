const dashboardHeading = (value) => {
  const AmazonTitle = document.getElementById("AmazonTitle");
  return (AmazonTitle.innerText = value);
};

const inputfield01 = document.getElementById("input-field01");
const inputfield02 = document.getElementById("input-field02");
const inputfield03 = document.getElementById("input-field03");
const inputfield04 = document.getElementById("input-field04");
const inputfield05 = document.getElementById("input-field05");
const inputfield06 = document.getElementById("input-field06");

inputfield01.addEventListener("change", (value) => {
  const AmazonSubTitle01 = document.getElementById("AmazonSubTitle01");
  AmazonSubTitle01.innerText = `•  ${value.target.value}`;
});
inputfield02.addEventListener("change", (value) => {
  const AmazonSubTitle02 = document.getElementById("AmazonSubTitle02");
  AmazonSubTitle02.innerText = `•  ${value.target.value}`;
});
inputfield03.addEventListener("change", (value) => {
  const AmazonSubTitle03 = document.getElementById("AmazonSubTitle03");
  AmazonSubTitle03.innerText = `•  ${value.target.value}`;
});
inputfield04.addEventListener("change", (value) => {
  const AmazonSubTitle04 = document.getElementById("AmazonSubTitle04");
  AmazonSubTitle04.innerText = `•  ${value.target.value}`;
});
inputfield05.addEventListener("change", (value) => {
  const AmazonSubTitle05 = document.getElementById("AmazonSubTitle05");
  AmazonSubTitle05.innerText = `•  ${value.target.value}`;
});
inputfield06.addEventListener("change", (value) => {
  const AmazonSubTitle06 = document.getElementById("AmazonSubTitle06");
  AmazonSubTitle06.innerText = `•  ${value.target.value}`;
});

function brandDetailInput(event){
  const Price = document.getElementById("Price");
  const detail01 = document.getElementById("detail01");
  const detail02 = document.getElementById("detail02");
  const detail03 = document.getElementById("detail03");
  const detail04 = document.getElementById("detail04");
  const detail05 = document.getElementById("detail05");

  if(event.target.id === "brandDetail-input0"){
    const brandDetail = document.getElementById("brandDetail-input0").value;
    Price.innerText = brandDetail;
  }
  if(event.target.id === "brandDetail-input01"){
    const brandDetail = document.getElementById("brandDetail-input01").value;
    detail01.innerText = brandDetail;
  }
  if(event.target.id === "brandDetail-input02"){
    const brandDetail = document.getElementById("brandDetail-input02").value;
    detail02.innerText = brandDetail;
  }
  if(event.target.id === "brandDetail-input03"){
    const brandDetail = document.getElementById("brandDetail-input03").value;
    detail03.innerText = brandDetail;
  }
  if(event.target.id === "brandDetail-input04"){
    const brandDetail = document.getElementById("brandDetail-input04").value;
    detail04.innerText = brandDetail;
  }
  if(event.target.id === "brandDetail-input05"){
    const brandDetail = document.getElementById("brandDetail-input05").value;
    detail05.innerText = brandDetail;
  }
}

  const cross = document.querySelector("#cross");
  cross.addEventListener('click',()=>{
    const app = document.querySelector(".app");
    app.style.display = "none";
  })

  function uploadImage(){
    const app = document.querySelector(".app");
    app.style.display = "flex";
  }

//Initial References
let imageContainer = document.getElementById("image-container");
let overlay = document.getElementById("overlay");
let mouseOverlay = document.getElementById("mouse-overlay");

//events object(stores events for touch,mouse)
let events = {
  mouse: {
    move: "mousemove",
  },
  touch: {
    move: "touchmove",
  },
};

//initially blank
let deviceType = "";

//Checks for device type
function isTouchDevice() {
  try {
    //We try to create touch event (it would fail for desktops and throw error)
    deviceType = "touch";
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
}

//hides overlay
const hideElement = () => {
  overlay.style.display = "none";
  mouseOverlay.style.display = "none";
};

//Check device so that deviceType variable is set to touch or mouse
isTouchDevice();

/*In addEventListener we use the events object to set the event so deviceType would be set to touch or mouse since we called 'isTouchDevice()' above
E.g:
if deviceType = "mouse" => the statement for event would be events[mouse].move which equals to mousemove.
if deviceType = "touch" => the statement for event would be events[touch].move which equals to touchstart.
*/

imageContainer.addEventListener(events[deviceType].move, (e) => {
  //Try, catch to avoid any errors for touch screens
  try {
    //pageX and pageY return the position of client's cursor from top left pf screen
    var x = !isTouchDevice() ? (e.pageX - 10) : e.touches[0].pageX;
    var y = !isTouchDevice() ? (e.pageY - 150): e.touches[0].pageY;
  } catch (e) {}
  //get image height and width
  let imageWidth = imageContainer.offsetWidth;
  let imageHeight = imageContainer.offsetHeight; 

  //check if mouse goes out of image container
  if (
    imageWidth - (x - imageContainer.offsetLeft) < 0 ||
    x - imageContainer.offsetLeft < 0 ||
    imageHeight - (y - imageContainer.offsetTop) < 0 ||
    y - imageContainer.offsetTop < 0
  ) {
    hideElement();
  } else {
      overlay.style.display = "block";
      mouseOverlay.style.display = "inline-block";
  }

  var posX = ((x - imageContainer.offsetLeft) / imageWidth).toFixed(5) * 95;
  var posY = ((y - imageContainer.offsetTop) / imageHeight).toFixed(5) * 95;

  //set background position to above obtained values
  overlay.style.backgroundPosition = posX + "%" + posY + "%";

  //move the overlay with cursor
  mouseOverlay.style.top = y + "px";
  mouseOverlay.style.left = x + "px";
});

function removeSideMenu(){
  const dashboard = document.querySelector(".dashboard");
  const sideMenu = document.querySelector(".sideMenu");
  dashboard.style.transition = "all .5s";
  dashboard.style.width = "0"
  dashboard.style.right = "-20%"
  sideMenu.style.display = "flex"
}

function showSideMenu(){
  const dashboard = document.querySelector(".dashboard");
  const sideMenu = document.querySelector(".sideMenu");
  dashboard.style.transition = "all .5s";
  dashboard.style.width = "20%"
  dashboard.style.right = "0%"
  sideMenu.style.display = "none"
}


  


