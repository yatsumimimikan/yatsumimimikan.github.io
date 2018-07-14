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
mouth_o = new Array("mouth_1.png","mouth_2.png","mouth_3.png","mouth_c_1.png","mouth_2.png","mouth_1.png","mouth_3.png","mouth_c_2.png","mouth_3.png","mouth_2.png","mouth_1.png","mouth_c_3.png");
mouth_c = new Array("mouth_c_1.png","mouth_c_2.png","mouth_c_3.png");
faceandbody = new Array("face_1.png","face_2.png","face_3.png");
eyecount = Math.floor( Math.random() * 1001 ); //*2
countInt = 0;
halfsteps = 0;

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

	eyecount -= Math.abs(aX)+Math.abs(aY)+Math.abs(aZ); 
        if(halfsteps == 0)
        {
            countInt = (countInt + 1) %12;
            halfsteps = 1;
        }
        else
        {
            halfsteps = 0;
        }

       //体
        document.face.src = faceandbody[countInt%3];


       //口
        if(isTouch == 0)
        {
             document.mouth.src = mouth_c[countInt%3];
        }
        else
        {
             document.mouth.src = mouth_o[countInt%12];
        }

        document.mouth.hspace = 10 + aY*3;

       //目
	if (eyecount <= 0)
            {
             document.eyes.src = eye_c[countInt%3];
            }
        else
            {
             document.eyes.src = eye_o[countInt%3];
            }
        document.eyes.hspace = 40 + aY*5;
        document.eyes.vspace = 80 + aZ*10;

	if (eyecount <= 0)
            {eyecount = Math.floor( Math.random() * 1001 );
             }

    }, 30);
}
