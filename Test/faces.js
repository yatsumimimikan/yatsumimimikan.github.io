//ƒJƒƒ‰—h‚ê
var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

//‚Ü‚Î‚½‚«‚Æ‚©
eye_o = new Array("eye_1.png","eye_2.png","eye_3.png");
eye_c = new Array("eye_c_1.png","eye_c_2.png","eye_c_3.png");
mouth_o = new Array("mouth_1.png","mouth_2.png","mouth_3.png");
mouth_c = new Array("mouth_c_1.png","mouth_c_2.png","mouth_c_3.png");
faceandbody = new Array("face_1.png","face_2.png","face_3.png");
count = Math.floor( Math.random() * 1001 ); //*2
countInt = Math.floor(count);

//ŒûƒpƒN
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
        countInt = Math.floor(count);
	if (count <= 0)
            {count = Math.floor( Math.random() * 1001 );
             countInt = 0;
            }



       //‘Ì
        document.face.src = faceandbody[countInt%3];

       //Œû
        if(isTouch == 0)
        {
             document.mouth.src = mouth_c[countInt%3];
        }
        else
        {
             document.mouth.src = mouth_o[countInt%3];
        }

        document.mouth.vspace = 10 + aX/2;


       //–Ú
	if (countInt <= 0)
            {
             document.eyes.src = eye_c[countInt%3];
            }
        else
            {
             document.eyes.src = eye_o[countInt%3];
            }
        document.eyes.hspace = 10 + aY;
        document.eyes.vspace = 10 + aX;





    }, 30);
}
