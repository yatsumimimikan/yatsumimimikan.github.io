//�܂΂����@�\
img = new Array("eye_close.png","eye_open.png"); //*1
count = Math.floor( Math.random() * 61 ); //*2
imgTimer();

function imgTimer() {
	//�摜�ԍ�
	count--; //*3
	//�摜�̖����m�F
	if (count <= 0)
            {count = Math.floor( Math.random() * 61 );
             document.eyes.src = img[0];
            }
        else
            {
             document.eyes.src = img[1];
            }
	//���̃^�C�}�[�Ăт���
	setTimeout("imgTimer()",100); //*6
}
