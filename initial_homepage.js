const homePageKey = "home_page";
$(document).ready(function(){
    const fileName = getPage();
    const savedHome = localStorage.getItem(homePageKey);
    if(savedHome == null || savedHome.endsWith('.html') == false){
        localStorage.setItem(homePageKey, fileName);
    } else if(fileName != savedHome) {
        goToPage(savedHome);
    }
});
function setPageAndGo(page) {
    setPage(page);
    goToPage(page);
}
function setPage(page) {
    const fileName = page || getPage();
    localStorage.setItem(homePageKey, fileName);
}
function getPage() {
    return location.pathname.endsWith(".html") ? location.pathname.split("/").slice(-1)[0].trim() : "index.html";
}
function goToPage(page) {
    const fileName = page || localStorage.getItem(homePageKey);
    if(page) {
        var url = location.href.substring(0, location.href.lastIndexOf("/") + 1) + page + location.search;
        location.href = url;
    }
}