var btn = false;

function changeBtnCouleur(){
    if (btn){
        document.getElementById("btn_submit").removeAttribute('style');

        var css = '.login-box a:hover {background: red; color: black; border-radius: 5px; box-shadow: 0 0 5px red, 0 0 25px red, 0 0 50px red, 0 0 100px red;}';
        
        //Span
        css += '.login-box a span:nth-child(1) {top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, red); animation: btn-anim1 1s linear infinite;}@keyframes btn-anim1 { 0% {left: -100%;}50%,100% {left: 100%;}}';
        css += '.login-box a span:nth-child(2) {top: -100%;right: 0;width: 2px;height: 100%;background: linear-gradient(180deg, transparent, red);animation: btn-anim2 1s linear infinite;animation-delay: .25s}@keyframes btn-anim2 {0% {top: -100%;}50%,100% {top: 100%;}}';
        css += '.login-box a span:nth-child(3) {bottom: 0;right: -100%;width: 100%;height: 2px;background: linear-gradient(270deg, transparent, red);animation: btn-anim3 1s linear infinite;animation-delay: .5s}@keyframes btn-anim3 {0% {right: -100%;}50%,100% {right: 100%;}}';
        css += '.login-box a span:nth-child(4) {bottom: -100%;left: 0;width: 2px;height: 100%;background: linear-gradient(360deg, transparent, red);animation: btn-anim4 1s linear infinite;animation-delay: .75s;}@keyframes btn-anim4 {0% {bottom: -100%;}50%,100% {bottom: 100%;}}';

        span1 = document.querySelector("#btn_submit > span:nth-child(1)")
        span1.removeAttribute('style');
        span2 = document.querySelector("#btn_submit > span:nth-child(2)")
        span2.removeAttribute('style');
        span3 = document.querySelector("#btn_submit > span:nth-child(3)")
        span3.removeAttribute('style');
        span4 = document.querySelector("#btn_submit > span:nth-child(4)")
        span4.removeAttribute('style');

        document.querySelector('#btn_submit').removeAttribute('style');
        css += '.login-box form a {position: relative;display: inline-block;padding: 10px 20px;color: red;font-size: 16px;text-decoration: none;text-transform: uppercase;overflow: hidden;transition: .5s;margin-top: 40px;letter-spacing: 4px}'; 
        
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
        
    } else {
        document.getElementById("btn_submit").removeAttribute('style');

        var css = '.login-box a:hover {background: #03e9f4; color: #fff; border-radius: 5px; box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;}';
        
        //Spans
        css += '.login-box a span:nth-child(1) {top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #03e9f4); animation: btn-anim1 1s linear infinite;}@keyframes btn-anim1 { 0% {left: -100%;}50%,100% {left: 100%;}}';
        css += '.login-box a span:nth-child(2) {top: -100%;right: 0;width: 2px;height: 100%;background: linear-gradient(180deg, transparent, #03e9f4);animation: btn-anim2 1s linear infinite;animation-delay: .25s}@keyframes btn-anim2 {0% {top: -100%;}50%,100% {top: 100%;}}';
        css += '.login-box a span:nth-child(3) {bottom: 0;right: -100%;width: 100%;height: 2px;background: linear-gradient(270deg, transparent, #03e9f4);animation: btn-anim3 1s linear infinite;animation-delay: .5s}@keyframes btn-anim3 {0% {right: -100%;}50%,100% {right: 100%;}}';
        css += '.login-box a span:nth-child(4) {bottom: -100%;left: 0;width: 2px;height: 100%;background: linear-gradient(360deg, transparent, #03e9f4);animation: btn-anim4 1s linear infinite;animation-delay: .75s;}@keyframes btn-anim4 {0% {bottom: -100%;}50%,100% {bottom: 100%;}}';

        span1 = document.querySelector("#btn_submit > span:nth-child(1)")
        span1.removeAttribute('style');
        span2 = document.querySelector("#btn_submit > span:nth-child(2)")
        span2.removeAttribute('style');
        span3 = document.querySelector("#btn_submit > span:nth-child(3)")
        span3.removeAttribute('style');
        span4 = document.querySelector("#btn_submit > span:nth-child(4)")
        span4.removeAttribute('style');

        document.querySelector('#btn_submit').removeAttribute('style');
        css += '.login-box form a {position: relative;display: inline-block;padding: 10px 20px;color: #03e9f4;font-size: 16px;text-decoration: none;text-transform: uppercase;overflow: hidden;transition: .5s;margin-top: 40px;letter-spacing: 4px}'; 
        
        var style = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
        
    }
}