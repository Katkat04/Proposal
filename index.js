const yesBtn=document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Sabia que ibas a decir que si, te amo mucho mi tilina 😘 ')
});

const noBtn=document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function (){
    const randomx = parseInt(Math.random()*100);
    const randomy=parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomy+'%');
    noBtn.style.setProperty('left', randomx+'%');
    noBtn.style.setProperty('transform',`translate(-${randomx}%,-${randomy}%)`);
} )
