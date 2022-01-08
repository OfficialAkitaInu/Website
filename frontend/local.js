/* This code makes it so we can write internal links in the correct format for
 * the live website AND have them still work when testing the website locally in
 * a browser.  This means we can use extensionless URLs and avoid duplicate
 * content, without having to install a web server for local testing.  This
 * makes it easier for people to get going testing and editing the website.
 * 
 * Internal links in the HTML should all be extensionless.  For example
 * href="/how-to-buy" as opposed to href="/how-to-buy.html".
 * 
 * When a page loads, this script will run IF the site is being tested locally
 * (which it detects with a URL starting with "file:" as opposed to "https:").
 * It will then run through all links in the HTML, and give any internal links
 * (i.e. links pointing to other pages on the Akita site) an onclick handler to
 * make them work in the local browser.
 */
if (location.protocol === "file:") {
    var setOnClick = function(link, href) {
        link.onclick = function() {
            location.href = href;
            return false;
        };
    };
    var replaceLinks = function() {
        var base = location.href.substring(0, location.href.lastIndexOf("/"));
        var links = document.links;
        var modifiedCount = 0;
        for (var i = 0, n = links.length; i < n; i++) {
            var link = links[i];
            if (link.href.startsWith("file:///")) {
                // link.href is the full link made by the browser, but
                // link.getAttribute("href") gets us the string defined in the
                // HTML.
                var href = link.getAttribute("href");
                if (href.startsWith("#")) {
                    // An anchor text within a page is fine.
                    continue;
                } else if (href.indexOf(".html") > -1) {
                    alert("Invalid internal link " + href + 
                        " - please use extensionless URLs like /how-to-buy " +
                        "instead of /how-to-buy.html");
                }
                var hashIndex = href.indexOf("#");
                var hash, hashless;
                if (hashIndex > -1) {
                    hash = href.substring(hashIndex);
                    hashless = href.substring(0, hashIndex);
                } else {
                    hash = "";
                    hashless = href;
                }
                var modified = base;
                if (!hashless.startsWith("/")) {
                    modified += "/";
                }
                modified += hashless;
                if (hashless.endsWith("/")) {
                    modified += "index.html";
                } else if (hashless.indexOf(".") === -1) {
                    modified += ".html";
                }
                modified += hash;
                setOnClick(link, modified);
                modifiedCount++;
                console.log('href="' + href + '" given onclick URL of "' +
                    modified + '" by local.js');
            }
        }
        console.log(modifiedCount + " internal links given onclick handlers " +
            "by local.js to make them work for local testing without " +
            "a web server.")
    };
    if (document.readyState !== "loading") {
        replaceLinks();
    } else {
        document.addEventListener('DOMContentLoaded', replaceLinks);
    }
}