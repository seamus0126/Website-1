
//Button 1 Change background
document.addEventListener('DOMContentLoaded', function()
{
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const crtScreen = document.getElementById('crt-screen');
const newImage = document.createElement('img');
newImage.classList.add('new-screen');

const images = ['Images/Static.gif','Images/glitch.gif', 'Images/glitch2.gif' , 'Images/glitch3.gif'];
let currentIndex = 0;
let isPoweredOn = false;


//Button 1 Change background
function changeBackground() {
    document.body.classList.toggle('new-background');
}

//Button 2 Change channel   

function changeScreen() {
    if (isPoweredOn) {
        newImage.src = images[currentIndex];
        newImage.sizes = '500vw';
        crtScreen.style.display = 'none';
        newImage.style.display = 'block';
        crtScreen.parentNode.appendChild(newImage);
        currentIndex = (currentIndex +1); // Cycle through the images
    }
    else{
    button2.disabled = true;
    }
}

//Button 3 'Power' Toggle
function powerToggle(){
    isPoweredOn = !isPoweredOn;
    if (isPoweredOn){
        button2.disabled = false;
    }
    else{
        button2.disabled = true;
        crtScreen.style.display = 'block';
        newImage.style.display = 'none';
    }
}
button1.addEventListener('click', changeBackground);
button2.addEventListener('click', changeScreen);
button3.addEventListener('click', powerToggle);

});
