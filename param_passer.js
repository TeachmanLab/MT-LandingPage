<!-- Save the campaign in local storage, so we don't loose track of it if they look around the site.-->

try {
    const url_string = window.location.href;
    const url = new URL(url_string);

    const campaign = url.searchParams.get("cp");
    const utm_source = url.searchParams.get("utm_source");
    const utm_medium = url.searchParams.get("utm_medium");
    const utm_content = url.searchParams.get("utm_content");

    if(campaign) localStorage.setItem('campaign', campaign);
    if(utm_source) localStorage.setItem('utm_source', utm_source);
    if(utm_medium) localStorage.setItem('utm_medium', utm_medium);
    if(utm_content) localStorage.setItem('utm_content', utm_content);

} catch (err) {
    console.log("Issues with Parsing URL Parameter's - " + err);
}

const getStarted = function() {
    const myUrlWithParams = new URL('https://mindtrails.virginia.edu/spanish/public/eligibility');

    myUrlWithParams.searchParams.append("cp", localStorage.getItem('campaign'));
    myUrlWithParams.searchParams.append("utm_source", localStorage.getItem('utm_source'));
    myUrlWithParams.searchParams.append("utm_medium", localStorage.getItem('utm_medium'));
    myUrlWithParams.searchParams.append("utm_content", localStorage.getItem('utm_content'));

    console.log(myUrlWithParams.href);
    location.href = myUrlWithParams.href
}
