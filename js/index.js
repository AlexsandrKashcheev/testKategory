
const list = document.getElementsByClassName('list__item');
const leafGreen = document.getElementById('leafGreen');
const leafBrown = document.getElementById('leafBrown');


for (let i = 0; i <= list.length; i++) {
    list[i].addEventListener('mouseover', () => {
        leafGreen.style.animationName = `leaf-green-ani${i+1}`
        leafGreen.style.animationPlayState = 'running';
        leafGreen.style.animationFillMode = 'forwards';

        leafBrown.style.animationName = `leaf-brown-ani${i+1}`;
        leafBrown.style.animationPlayState = 'running';
        leafBrown.style.animationFillMode = 'forwards';
    });

}
