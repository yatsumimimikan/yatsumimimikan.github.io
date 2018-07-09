const medias = {audio : false, video : {
        facingMode : {exact : "environment"}// リアカメラにアクセス
            }
      },
      video  = document.getElementById("video"),
      canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext("2d");

navigator.getUserMedia(medias, successCallback, errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};

function draw() {
  canvas.width  = window.innerWidth*2;
  canvas.height = window.innerHeight*2;
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}