$(document).ready(function() {
    // Credit to Christofer Eliasson and Starx
    // https://stackoverflow.com/questions/9870512/how-to-obtain-the-query-string-from-the-current-url-with-javascript
    var paramsString = window.location.search;
    let searchParams = new URLSearchParams(paramsString); // should strip leading "?"

    // Get randomization condition and store as var
    var condition = searchParams.get('condition');

    // When user clicks on a "get started" link, they'll be redirected to the account creation page. Ensure we pass their randomization condition as a query param
    // Credit to James Donnelly
    // https://stackoverflow.com/questions/25290299/add-query-string-parameter-to-static-link-on-click
    $('a[href].account-create').addEventListener('click', function(event) {
        // Stop the link from redirecting
        event.preventDefault();
    
        // Redirect instead with JavaScript
        window.location.href = element.href + '?condition=' + condition;
    }, false);

});