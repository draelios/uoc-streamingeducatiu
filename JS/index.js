function searchVideos() {
    window.location.href = 'search.html';
}
function getVideosFromDB() {
    return fetch('videos_db.json')
        .then(response => response.json());
}