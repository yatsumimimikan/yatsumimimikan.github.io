//口パク機能
count = Math.floor( Math.random() * 61 ); //*2
mouthOpener();

function mouthOpener() {
	
	count--; //*3
	
	if (count <= 0)
            {count = Math.floor( Math.random() * 61 );
            }
        document.mouth.height = count;
        
        document.mouth.hspace = 61-count;
        document.mouth.vspace = (61-count)/2;
        
	//次のタイマー呼びだし
	setTimeout("mouthOpener()",10); //*6
}
