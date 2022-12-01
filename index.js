var select = function (s) {
    return document.querySelector(s);
   },
   selectAll = function (s) {
    return document.querySelectorAll(s);
   },
   animationWindow = select("#animationWindow"),
   anim = lottie.loadAnimation({
    container: animationWindow,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://assets.codepen.io/35984/smash-toggle.json"
   });
  
  anim.addEventListener("DOMLoaded", onDOMLoaded);
  
  function onDOMLoaded(e) {
   animationWindow.onclick = function (e) {
    anim.goToAndPlay(2, true);
   };
  }
  //ScrubLottieTimeline(anim)
  