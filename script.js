const music = document.getElementById('bgMusic');

document.body.addEventListener('click', () => {
  music.play();
}, { once: true });
function scrollToSection(){
  document.getElementById('nextSection').scrollIntoView({
    behavior:'smooth'
  });
}

const text = "Naana... 💖 Every moment with you is my favourite memory. You are the best thing that ever happened to me... ✨";

let index = 0;

function typeEffect(){
  if(index < text.length){
    document.querySelector('.typing').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect,60);
  }
}

window.onload = typeEffect;

const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{

  faders.forEach(fade=>{

    const top = fade.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      fade.classList.add('show');
    }

  });

});