document.addEventListener('DOMContentLoaded', function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var gifs = ['00_01.gif','00_02.gif','00_03.gif','00_04.gif','00_05.gif','00_06.gif','00_07.gif','00_08.gif','00_09.gif','00_10.gif','00_11.gif','00_12.gif',];
    var random = getRandomInt(0,11)
    var element = document.getElementById('lain-gif').src = "img/menu_gifs/" + gifs[random]
});

function TachibanaLogoSelected() {
    var tachibana = document.getElementById('logo-tachibana').src = "/img/svg/Home_hover.svg";
}

function TachibanaLogoNotSelected() {
    var tachibana = document.getElementById('logo-tachibana').src = "/img/svg/Home.svg";
}
