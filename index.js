"use strict";

let tl = new TimelineLite();
const slider = $("#slider");
const rename = () => {
  tl.pause();
  tl.progress(0);
  $('.submit__text').html('Submit').removeClass('fa fa-check').addClass('active').css('pointer-events', 'auto');
  $('.container').css('pointer-events', 'auto');
};
$('.submit').on('click', () => {
  tl.play();
  tl.to('.submit', 1.1, {
    width: '2.7em',
    transform: 'translateX(-100%)',
    ease: Back.easeOut
  }, 'first');
  tl.to('.submit__text', 0.24, {
    opacity: 0,
    ease: Power3.easeOut,
    onComplete: () => {
      $('.submit__text').html('').addClass('fa fa-check').removeClass('active').css('pointer-events', 'none');
      $('.container').css('pointer-events', 'none');
    }
  }, 'first');
  tl.to('.submit', 1, {
    transform: 'translateX(2100%)',
    ease: Back.easeOut
  }, 'translate');
  tl.staggerTo('.ball', 0.2, {
    transform: 'scale(1)',
    width: '2.7em'
    // ease: Back.easeOut
  }, 0.075, 'translate');

  //1
  tl.to('.ball-1', 0.25, {
    transform: 'translateX(-900%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'translate -= 0.05');
  tl.to('.ball-1', 0.28, {
    transform: 'translateX(0%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-1');
  tl.to('.submit', 0.25, {
    transform: 'translateX(2800%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'bounce-1 -= 0.05');
  tl.to('.submit', 0.28, {
    transform: 'translateX(2100%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-1.5');
  //2
  tl.to('.ball-1', 0.25, {
    transform: 'translateX(-900%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'bounce-1.5 -= 0.05');
  tl.to('.ball-1', 0.28, {
    transform: 'translateX(0%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-2');
  tl.to('.submit', 0.25, {
    transform: 'translateX(2800%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'bounce-2 -= 0.05');
  tl.to('.submit', 0.28, {
    transform: 'translateX(2100%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-3');
  tl.to('.ball-1', 0.25, {
    transform: 'translateX(-900%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'bounce-3 -=0.1');
  tl.to('.ball-1', 0.28, {
    transform: 'translateX(0%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-4');
  tl.to('.submit', 0.25, {
    transform: 'translateX(2800%)',
    marginTop: '-1em',
    ease: Power0.easeIn
  }, 'bounce-4 -= 0.05');
  tl.to('.submit', 0.28, {
    transform: 'translateX(2100%)',
    marginTop: '0em',
    ease: Power0.easeOut
  }, 'bounce-5');
  tl.to('.submit', 0.5, {
    transform: 'translateX(0%)'
  }, 'bounce-5 -= 0.03');
  tl.staggerTo('.ball', 0.35, {
    transform: 'scale(0)',
    width: '0em'
  }, -0.1, 'bounce-5 -= 0.03');
  tl.to('.submit', 0.25, {
    width: '13em'
  }, 'final');
  tl.to('.submit__text', 1, {
    opacity: 1,
    transform: 'scale(1.05)',
    onComplete: () => {
      setTimeout(rename, 2000);
    }
  });
});