console.log('Loaded!');
//Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHtml= 'New Value';
//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    
}
    img.onclick = function() {
    img.style.marginLeft = '100px';
    var interval = setInterval(moveRight, 100);
};
