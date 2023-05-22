function setRandomBgColor(){
    var randomcolor = '#'+Math.round(Math.random()*0xffffff).toString(16);
    document.getElementById('color-box').style.backgroundColor = randomcolor;
};