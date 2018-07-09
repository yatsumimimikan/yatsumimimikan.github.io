const medias = {audio : false, video : {
        facingMode : {exact : "environment"}// ���A�J�����ɃA�N�Z�X
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

