// get current date in format dd/mm/yyyy
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
console.log("Today: " + today);
const url = "https://docs.google.com/spreadsheets/d/1pvwjyRWvRPzHoacraKi4w6324-BErl3Bs-Q9HIwbeGI/gviz/tq?tqx=out:csv&sheet=Sheet1&tq=SELECT B WHERE D = '" + today + "'";
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


        // go to blogUrl after 2 seconds
        setTimeout(function() {
            // window.location.href = blogUrl;
        }, 2000);
    }
};
xhr.send();