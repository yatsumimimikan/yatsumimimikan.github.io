//カメラ揺れ
var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

//まばたき
img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 121 ); //*2

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

	count--; 
	if (count <= 0)
            {count = Math.floor( Math.random() * 121 );
             document.eyes.src = img[0];
            }
        else
            {
             document.eyes.src = img[1];
            }
        document.eyes.hspace = 60-count/2 +aX;
        document.eyes.vspace = 10 + aY*10;

       //口パク機能
        if(isTouch == 0)
        {
            document.mouth.height = count;
        }
        else
        {
            document.mouth.height = 0;
        }

    }, 30);
}
