(() => {

    /* 이미지 미리보기 */
    const $img = document.getElementById('image-update');
    const $text = document.getElementById('text-update');
    const $file = document.getElementById('upload');
    let $flag = false;

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


    /* 이미지 및 텍스트 전송 */
    const $btn = document.querySelector('.send_btn');
    $btn.addEventListener('click', () => {
        if ($flag === true) {
            const $container = document.querySelector('.container');
            const $create_li = document.createElement('li');
            $create_li.classList = 'item';
            $container.appendChild($create_li);

            const $send_img = document.createElement('img');
            $send_img.src = $img.src;
            $create_li.appendChild($send_img);

            const $send_text = document.createElement('p');
            $send_text.innerHTML = `${$text.value}`;
            $send_text.classList = 'name';
            $create_li.appendChild($send_text);

            $text.value = '';
            $file.value = '';
            $img.removeAttribute('src');
            $img.style.visibility = 'hidden';

            $flag = false;

        } else if ($flag === false) {
            console.log('사진을 이미 전송하였습니다.');
        }
    });

    const $search = document.getElementById('search-text');
    $search.addEventListener('change', () => {

        const $item = document.querySelectorAll('.item');
        for (let i = 0; i < $item.length; i++) {
            const $name = $item[i].querySelectorAll('.name');
            if ($name[0].innerHTML.toUpperCase().indexOf($search.value.toUpperCase()) > -1) {
                $name[0].parentElement.style.display = 'block';
            } else {
                $name[0].parentElement.style.display = 'none';
            }
        }
    })





    /* 이미지 검색 */

})();