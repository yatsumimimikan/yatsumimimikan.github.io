const medias = {audio : false, video : {
        facingMode : {
          exact : "environment" // リアカメラにアクセス
        }
      }},
      video  = document.getElementById("video"),
      canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext("2d");

navigator.mediaDevices.getUserMedia(medias, successCallback, errorCallback);



function successCallback(stream) {
  video.srcObject = stream;
  requestAnimationFrame(draw);
};

function errorCallback(err) {
  blue();
};

function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}

function blue() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}