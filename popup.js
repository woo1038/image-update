(() => {
    
    /* 이미지 미리보기 */
    const $img = document.getElementById('image-update');
    const $text = document.getElementById('text-update');
    const $file = document.getElementById('upload');
    let $flag = false;  // 사진 있을때에만 확인 버튼호출

    $file.addEventListener('change', function () {
        update();
        $flag = true;
        $img.style.visibility = 'visible';
    });

    function update() {
        const $fileinfo = document.getElementById('upload').files[0];
        const $reader = new FileReader();

        $reader.addEventListener('load', () => {
            $img.src = $reader.result;
        });

        if ($fileinfo) {
            $reader.readAsDataURL($fileinfo);
        }

    }

    
    const $confirm_btn = document.querySelector('.send_btn');
    $confirm_btn.addEventListener('click', () => {
        if ($flag === true) {

        const $container = opener.document.querySelector('.container');
        const $create_li = opener.document.createElement('li');
        $create_li.classList = 'item';
        $container.appendChild($create_li);

        const $send_img = opener.document.createElement('img');
        $send_img.src = $img.src;
        $create_li.appendChild($send_img);

        const $send_text = opener.document.createElement('p');
        $send_text.innerHTML = `${$text.value}`;
        $send_text.classList = 'name';
        $create_li.appendChild($send_text);
        
        close();
        } else if ($flag === false) {
            console.log('사진파일이 없습니다.');
        }
    })

    const $cancel = document.querySelector('.cancel_btn');
    $cancel.addEventListener('click', () => {
        close();
    })
})();