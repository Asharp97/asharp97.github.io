AOS.init({ offset: 250, duration: 1200 });

var icon = document.getElementById("night");
var iconMob = document.getElementById("nightMob");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "fa-regular fa-sun";
  } else {
    icon.className = "fa-regular fa-moon";
  }
};
iconMob.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconMob.className = "fa-regular fa-sun";
  } else {
    iconMob.className = "fa-regular fa-moon";
  }
};

function openSlideMenu(){
  document.getElementById('sideMenu').style.width='200px';
  document.getElementById("nightMob").style.marginLeft = "200px";
  document.getElementById('sideMenuLinks').style.opacity='1';
  document.getElementById('all').style.filter='blur(3px)';
  
  
}
function closeSlideMenu(){
  document.getElementById('sideMenu').style.width='0';
  document.getElementById("nightMob").style.marginLeft = "0";
  document.getElementById('sideMenuLinks').style.opacity='0';
  document.getElementById('all').style.filter='blur(0)';

}
