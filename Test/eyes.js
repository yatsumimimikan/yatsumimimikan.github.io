//まばたき機能
img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 61 ); //*2
imgTimer();

function imgTimer() {
	//画像番号
	count--; //*3
	//画像の枚数確認
	if (count <= 0)
            {count = Math.floor( Math.random() * 61 );
             document.eyes.src = img[0];
            }
        else
            {
             document.eyes.src = img[1];
            }
	//次のタイマー呼びだし
	setTimeout("imgTimer()",100); //*6
}
