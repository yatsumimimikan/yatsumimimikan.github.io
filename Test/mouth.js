//�܂΂����@�\
count = Math.floor( Math.random() * 61 ); //*2
mouthOpener();

function mouthOpener() {
	//�摜�ԍ�
	count--; //*3
	//�摜�̖����m�F
	if (count <= 0)
            {count = Math.floor( Math.random() * 61 );
            }
        document.mouth.height = count;
        
        document.mouth.hspace = 61-count;
        document.mouth.vspace = (61-count)/2;
        
	//���̃^�C�}�[�Ăт���
	setTimeout("mouthOpener()",10); //*6
}
