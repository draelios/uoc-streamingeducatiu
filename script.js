document.getElementById("searchButton").addEventListener("click", (e) => {
    e.preventDefault();
    if (document.getElementById("search-keyword").value == "") {
        alert("Please enter a search term.");
    } else {
        window.location = "search_results.html";
    }
}
);
