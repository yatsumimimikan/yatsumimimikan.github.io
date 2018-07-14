//カメラ揺れ
var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

//まばたきとか
eye_o = new Array("eye_1.png","eye_2.png","eye_3.png");
eye_c = new Array("eye_c_1.png","eye_c_2.png","eye_c_3.png");
mouth_o = new Array("mouth_1.png","mouth_2.png","mouth_3.png");
mouth_c = new Array("mouth_c_1.png","mouth_c_2.png","mouth_c_3.png");
faceandbody = new Array("face_1.png","face_2.png","face_3.png");
count = Math.floor( Math.random() * 1001 ); //*2

//口パク
var hitarea = document.getElementById('hitarea'),
    isTouch = 0;


/*var setTouch = function(eventname){
    isTouch = eventname;
}*/

hitarea.addEventListener('touchstart',function(event){isTouch = 1;},false);
hitarea.addEventListener('touchend',function(event){isTouch = 0;},false);

FaceTimer();

function FaceTimer() {


    setInterval(() => {

	count -= Math.abs(aX)+Math.abs(aY)+Math.abs(aZ); 
	if (count <= 0)
            {count = Math.floor( Math.random() * 1001 );
             document.eyes.src = eye_c[count%3];
            }
        else
            {
             document.eyes.src = eye_o[count%3];
            }
        document.eyes.hspace = 20 + aY*10;
        document.eyes.vspace = 20 - aX*10;

       //口パク機能
        if(isTouch == 0)
        {
             document.mouth.src = mouth_c[count%3];
        }
        else
        {
             document.mouth.src = mouth_o[count%3];
        }

        document.mouth.hspace = 20 + aY*10;

        document.fath.src = faceandbody[count%3];
    }, 30);
}
