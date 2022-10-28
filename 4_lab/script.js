let items = document.querySelectorAll('.item');

let tags = document.querySelectorAll('.side_tag');

for (var i = 0; i < tags.length; i++) {
    (function(index) {
        tags[index].addEventListener("click", function() {
            for (var i = 0; i < items.length; i++) {
                if (!items[i].dataset.tags.includes(this.dataset.tag)) {
                    items[i].style.display = 'none';
                }
                else {
                    items[i].style.display = 'initial';
                }
            }
        })
    })(i);
}
