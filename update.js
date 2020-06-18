(() => {
    /* 이미지 검색 */
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
    console.log($item);
})



    /* 팝업창 */
    const $popup = document.querySelector('.popup');
    $popup.addEventListener('click', () => {
        let _left = Math.ceil((window.screen.width) / 2) - 200;
        let _top = Math.ceil((window.screen.height) / 2) - 300;
        window.open('./popup.html', "popup", 'width=400, height=600, left=' + _left + ', top=' + _top);
    });

})();