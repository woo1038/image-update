(() => {
    
    const $img = document.getElementById('image-update');
    const $file = document.getElementById('image-upload');
    $file.addEventListener('change', update);

    function update() {
        const $fileinfo = document.getElementById('image-upload').files[0];
        const $reader = new FileReader();

        $reader.addEventListener('load', () => {
            $img.src = $reader.result;
        });

        if($fileinfo) { 
            $reader.readAsDataURL($fileinfo);
        }
    }
    
    const $btn = document.querySelector('.send_btn');
    $btn.addEventListener('click', () => {
        const $send_img = document.createElement('img');
        document.body.appendChild($send_img);
        $send_img.classList = 'a';
        $send_img.src = $img.src;
        $img.src = '';
    });
    
})();