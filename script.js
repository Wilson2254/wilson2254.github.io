//Перейти наверх
arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight-document.documentElement.clientHeight/1.1);
});

//Скролл по блокам
let inp = document.querySelector('#menu_content>input')
let fl = false;
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.querySelector('#menu').style.transform = 'translate(100%, 0)'
    fl = false;
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth'
    })
  })
}
inp.addEventListener('click', function(e){
    if (!fl){
      document.querySelector('#menu').style.transform = 'translate(0, 0)'
      fl = true;
    }
    else {
      document.querySelector('#menu').style.transform = 'translate(100%, 0)'
      fl = false;
    }
})


//Вращение кейсов
function func(elem) {
  elem.style.pointerEvents = 'none';
  let playing = false;
    if(playing)
      return;
      playing = true;
      anime({
      targets: elem.parentElement.parentElement,
      rotateY: {value: '+=180', delay: 200},
      easing: 'easeInOutSine',
      duration: 250,
      complete: function(anim){
         playing = false;
      }
    });
    setTimeout(() => elem.style.pointerEvents = 'auto', 1500)
}
