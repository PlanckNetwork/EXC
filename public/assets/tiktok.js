try {
    var searchprovider = `https://www.tiktok.com/`;

    // Redirect to TikTok as soon as the page loads
    window.addEventListener("load", () => {
        location.assign("/service/" + xor.encode(searchprovider));
    });

} catch {
    // Catch Media Page
    console.log("Could not load Index elements, assuming user is on media or media frame.");
    function mailMaintainer() {
        window.location.href = `mailto:nullnvoid@mailfence.com?subject=Takedown Request For ${window.location.origin}`;
    }
    try {
        var gf = parent.document.getElementById("gframe");
        function loadRuf(game) {
            gf.type = "application/x-shockwave-flash";
            var ele1 = document.createElement("script");
            ele1.setAttribute("src", "/assets/ruffle/ruffle.js"),
                parent.document.body.appendChild(ele1), gf.src = game;
        }
        // Media Search
        document.getElementById("gSearch").addEventListener("input", () => {
            for (i = 0; i < document.getElementById("gMenu").getElementsByTagName("li").length; i++) {
                const listItem = document.getElementById("gMenu").getElementsByTagName("li")[i];
                listItem.style.display = listItem.getElementsByTagName("a")[0].innerHTML.toUpperCase().includes(document.getElementById("gSearch").value.toUpperCase()) ? "" : "none";
            }
        });

    } catch {}
}