var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 121 ); //*2
FaceTimer();

function FaceTimer() {
	//まばたき機能
	count--; 
	if (count <= 0)
            {count = Math.floor( Math.random() * 121 );
             document.eyes.src = img[0];
            }
        else
            {
             document.eyes.src = img[1];
            }
        document.eyes.hspace = 10 + aX;
        document.eyes.vspace = 10 + aY;

       //口パク機能
        document.mouth.height = count/2;
        
        document.mouth.hspace = 60-count/2 +aX;
        document.mouth.vspace = (30-count/4) +aY;




	//次のタイマー呼びだし
	setTimeout("FaceTimer()",30); //*6
}
