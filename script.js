
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ----------sidemeue-----------
sidemenue = document.getElementById("sidemenue");
      function openmenue() {
        sidemenue.style.right = "0";
      }
      function closemenue() {
        sidemenue.style.right = "-200px";
      }

