//�J�����h��
var aX = 0, aY = 0, aZ = 0;
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;
    aY = dat.accelerationIncludingGravity.y;
    aZ = dat.accelerationIncludingGravity.z;
});

//�܂΂���
img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 121 ); //*2


//�}�C�N���p�N
navigator.getUserMedia({audio: true}, successCallback, errorCallback);

function successCallback(stream) {
FaceTimer(stream);
/*
      btn.addEventListener("click", () => {
      FaceTimer(stream);
    }, false);
*/
};

function errorCallback(err) {
  alert(err);
};

function FaceTimer(stream) {

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    options  = {mediaStream : stream},
    src      = audioCtx.createMediaStreamSource(stream),
    analyser = audioCtx.createAnalyser(stream),
    sound    = Uint8Array(1);

    src.connect(analyser);

    setInterval(() => {
        sound = analyser.getByteTimeDomainData(1);
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

       //���p�N�@�\

        document.mouth.height = sound[0];
        
        document.mouth.hspace = 60-sound[0] +aX;
        document.mouth.vspace = (30-sound[0]) +aY;



    }, 30);
	//���̃^�C�}�[�Ăт���
	//setTimeout("FaceTimer()",30); //*6
}
