$(document).ready(function(){
    $(".btn-menu").click(function(){
        $(".menu-navbar").toggleClass("open-navbar");
        $(".container-navbar").toggleClass("open-navbar");
        $(".btn-menu").toggleClass("close-navbar");
    });
});