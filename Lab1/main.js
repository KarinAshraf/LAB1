var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/download.jpg');
    } else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


