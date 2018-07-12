//カメラ揺れ
var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

//まばたき
img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 11 ); //*2


//マイク口パク
var sound = 0;
//navigator.getUserMedia({audio: true}, successCallback, errorCallback);
FaceTimer();

function successCallback(stream) {
FaceTimer();
/*
      btn.addEventListener("click", () => {
      FaceTimer(stream);
    }, false);
*/
};

function errorCallback(err) {
  alert(err);
};

function FaceTimer() {
/*
    audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
    options  = {mediaStream : stream},
    src      = audioCtx.createMediaStreamSource(stream),
    analyser = audioCtx.createAnalyser(stream);
*/
    setInterval(() => {
        //sound = analyser.getByteTimeDomainData(1);
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
/*
        document.mouth.height = sound;
        
        document.mouth.hspace = 60-sound +aX;
        document.mouth.vspace = (30-sound) +aY;
*/


    }, 30);
	//次のタイマー呼びだし
	//setTimeout("FaceTimer()",30); //*6
}
