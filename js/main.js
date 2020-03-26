var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav-bar').style.top = "0";
  } else {
    document.getElementById('nav-bar').style.top= "-50px";
  }
  prevScrollpos = currentScrollPos;
  }
  function darkmood(){
  var a=document.getElementById('darkmood').style.color="red";
  var b=document.getElementById('body').style.backgroundColor="#000";
  var b=document.getElementById('nav-bar').style.backgroundColor="gray";
  var b=document.getElementById('btn-container').style.color="#fff";
  
  }
  function closeNav(){
  var closeNavigation=document.getElementById('nav-menu').style.display="none";
  }
  function showNav(){
  var showNavigation=document.getElementById('nav-menu').style.display="block";
  }
