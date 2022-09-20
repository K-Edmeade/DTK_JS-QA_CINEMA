import React, { useEffect } from "react";

function GoogleMap() {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 51.507316;
        const lon = -0.073706;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <div>
            <iframe id="iframeId" title="work address" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;