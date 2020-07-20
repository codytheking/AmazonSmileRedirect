// Create URL object
var url = new URL(window.location.href);

// Construct new URL
var host_loc = url.toString().indexOf(url.host);
var after_host = url.toString().substring(host_loc + url.host.length + 1);
var new_url = url.protocol + "//smile.amazon.com/" + after_host;

// Redirect to page on Amazon Smile
window.location.href = new_url;
