function showLastUpdated(){
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    document.getElementById("lastupdated").textContent = "Page last updated on: " + formattedDate;
}

window.addEventListener("load", showLastUpdated);