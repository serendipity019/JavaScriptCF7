$(function() {
    let debounceTimeout = null;
    $("#searchInput").on("input", function(){
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)// 1500 is 1,5 sec
    });

    $("showMore").on("click", function(e) {
        e.preventDefault();
        onShowMoreClicked();
    })
})