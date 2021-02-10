document.addEventListener('DOMContentLoaded', function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var gifs = ['01_01.gif','01_02.gif','01_03.gif','01_04.gif','01_05.gif','01_06.gif','01_07.gif'];
    var random = getRandomInt(0,6)
    var element = document.getElementById('lain-gif').src = "/img/game_gifs/" + gifs[random]
    var element2 = document.getElementById('lain-gif-mobile-img').src = "/img/game_gifs/" + gifs[random]

});

function imgSelected(paramElement) {
    var id = paramElement.id;
    var idComparar = id.slice(0,-4);
    var levels = {
                'dc':'/img/game_svg/selected/dc_selected.svg',
                'cou':'/img/game_svg/selected/cou_selected.svg',
                'dia':'/img/game_svg/selected/dia_selected.svg',
                'sskn':'/img/game_svg/selected/sskn_selected.svg',
                'tak':'/img/game_svg/selected/tak_selected.svg',
                'tda':'/img/game_svg/selected/tda_selected.svg'
    }

    for (var nombreNivel in levels){
        if(idComparar == nombreNivel){
            imagenSelected = document.getElementById(id).src = levels[nombreNivel];
        }
    }
}

function imgNotSelected() {
    var imagenNoSelected = document.getElementById('level-img').src = "/img/game_svg/normal/Dc.svg";
}
