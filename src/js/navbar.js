let nav = document.querySelector("#navbar-custom");

var IdealTimeOut = 180;
var idleSecondsTimer = null;
var idleSecondsCounter = 0;
idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);
 
function CheckIdleTime() {
  idleSecondsCounter++;
  var oPanel = document.getElementById("timeOut");
  if (oPanel) {
    oPanel.innerHTML = (IdealTimeOut - idleSecondsCounter);
            }
  if (idleSecondsCounter >= IdealTimeOut) {
    window.clearInterval(idleSecondsTimer);
    alert("Your Session has expired. Please login again.");
    location.replace("login.html");
    }  
}

nav.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">
  <img src="./img/eci.png" width="150px" loading="lazy"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
   <li class="nav-item">
      <div class="nav-link">
      logged out in <span id="timeOut"></span> s.
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./vote.html">Cast Vote</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./result.html">Result</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./login.html">logout</a>
    </li>

  </ul>
</div>
</nav>`
