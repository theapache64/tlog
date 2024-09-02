// read URL path and get the data after the last `#` character
const currentUrl = window.location.href;
console.log("Current URL: " + currentUrl);
const data = currentUrl.substring(currentUrl.lastIndexOf("#") + 1).trim();
console.log("Data: '" + data+"'");

// Check if data string is a number or not
let url;
if (isNaN(data)) {
    // get current date in format dd/mm/yyyy
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log("Today: " + today);
    url = "https://docs.google.com/spreadsheets/d/1pvwjyRWvRPzHoacraKi4w6324-BErl3Bs-Q9HIwbeGI/gviz/tq?tqx=out:csv&sheet=Sheet1&tq=SELECT B WHERE C = '" + today + "'";
}else{
    url = "https://docs.google.com/spreadsheets/d/1pvwjyRWvRPzHoacraKi4w6324-BErl3Bs-Q9HIwbeGI/gviz/tq?tqx=out:csv&sheet=Sheet1&tq=SELECT B WHERE D = " + data;
}
console.log("URL: " + url);

// Get blog URL from Google Sheet
const xhr = new XMLHttpRequest();
xhr.open("GET", url , true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let responseText = xhr.responseText;
        console.log("Response: " + responseText);
        let blogUrl = responseText.split("\n")[1];
        console.log("URL: " + blogUrl);

        // remove `"` start and end of the URL
        blogUrl = blogUrl.substring(1, blogUrl.length - 1);

        console.log("URL is " + blogUrl);

        // go to blogUrl after 2 seconds
        setTimeout(function() {
            window.location.href = blogUrl;
        }, 2000);
    }
};
xhr.send();