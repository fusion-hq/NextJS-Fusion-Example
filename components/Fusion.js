import { useEffect } from "react";

export default function Fusion() {
    
    useEffect(() => {
        console.log('hello');
       (function() {
        var fusionScript = document.createElement("SCRIPT");
        fusionScript.src = "../array.js"; 
        fusionScript.type = "text/javascript";
        document.getElementsByTagName("HEAD")[0].appendChild(fusionScript);
        document.onreadystatechange = function (){ 
            if (document.readyState === "complete") {
                fusion.init("608813b5254914007109279a", 
                "https://fusion-event-collector.herokuapp.com", 
                false);
            }
        };
       })();
    }, [])
    return <div></div>;
}