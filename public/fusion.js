(function () { var fusionScript = document.createElement("SCRIPT");
fusionScript.src = "https://app.fusionhq.co/array.js"; fusionScript.type = "text/javascript"; document.getElementsByTagName("HEAD")[0].appendChild(fusionScript);
document.onreadystatechange = function () { if (document.readyState === "complete") {
fusion.init("608813b5254914007109279a", "https://fusion-event-collector.herokuapp.com", true);}};})()