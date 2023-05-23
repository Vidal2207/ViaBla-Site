// CARGANDO VENTANA
$(window).on("load",ventanaCargada);
$("#htmlPrincipal").addClass("despOculto-y");
function ventanaCargada(){
//   setTimeout(function(){
//       $(".loader").fadeOut("slow");
//     $("#htmlPrincipal").removeClass("despOculto-y");
//   },3000);
  $(".loader").fadeOut("slow");
  $("#htmlPrincipal").removeClass("despOculto-y");
}
$(document).ready(function(){
    scrooll_top();
    $('#logo').click(function() {
        // location.reload();
        $(location).attr('href','/index.html');
    });
    $('#download').click(function() { 
        location.hash = "#btn_download";
    });
    $('#btn_download').click(function() { 
        linkDescarga();
    });
    $('#about').click(function() {
        $(location).attr('href','/about.html');
    });
    $('#privacy').click(function() {
        $(location).attr('href','/privacy.html');
    });
    $('#back').click(function() {
        history.back();
    });
    $('#home').click(function() {
        $(location).attr('href','/index.html');
    });
});
function linkDescarga(){
    alert('Esta aplicación se encuentra actualmente en modo de desarrollo\nAgradecemos su interés y apoyo durante esta etapa de desarrollo.');
    open('https://www.mediafire.com/file/umq9mivagoi6y2v/app-debug.apk/file');
}

function scrooll_top(){
  $('html, body').animate({
    scrollTop: 0
  });
}