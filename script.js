function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".hiremeprofilelink").hover(function() {
  $(".hiremeprofilesum").css("display","block");
});