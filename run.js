const https = require("https");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const G = `\x1b[32m`;
const R = `\x1b[31m`;
const Default = `\x1b[0m`;
rl.question("Enter url (https://example.com): ", url => {
    if (url.includes("https")) {
        var mainLoopId = setInterval(() => {
            https
                .get(url, res => {
                    console.log(G + "Sending request to ", url + Default);
                })
                .on("error", e => {
                    console.error(R + `Error: ${e.message}` + Default);
                });
        }, 100);
    } else {
        console.log("Not Found URL!");
    }
    rl.close();
});
