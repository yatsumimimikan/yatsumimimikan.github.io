//まばたき機能
count = Math.floor( Math.random() * 61 ); //*2
/*
navigator.getUserMedia({audio: true}, _handleSuccess, _handleError);
  
  function _handleSuccess(evt) {
    btn.addEventListener("click", () => {
      _handleClick(evt);
    }, false);
  }

  function _handleError() {alert("Error!");}




*/
mouthOpener();

function mouthOpener() {
	//画像番号
	count--; //*3
	//画像の枚数確認
	if (count <= 0)
            {count = Math.floor( Math.random() * 61 );
            }
        document.mouth.height = count;
        
        document.mouth.hspace = 61-count;
        document.mouth.vspace = (61-count)/2;
        
	//次のタイマー呼びだし
	setTimeout("mouthOpener()",10); //*6
}
