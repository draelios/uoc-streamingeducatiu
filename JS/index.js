document.addEventListener('DOMContentLoaded', () => {
    // Cerca de vídeos per paraula clau
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = document.getElementById('search-keyword').value;
        const level = document.getElementById('filter-level').value;
        const rating = document.getElementById('filter-rating').value;
        const language = document.getElementById('filter-language').value;
        
        // Simulació de resultats de cerca
        searchResults.innerHTML = `
            <h3>Search Results for "${keyword}"</h3>
            <p>Level: ${level}, Rating: ${rating} stars, Language: ${language}</p>
            <ul>
                <li>Video 1: Introduction to ${keyword}</li>
                <li>Video 2: Advanced concepts of ${keyword}</li>
                <li>Video 3: ${keyword} for professionals</li>
            </ul>
        `;
    });

    // Creació de llistes de reproducció personalitzables
    const playlistForm = document.getElementById('playlist-form');
    const playlistVideos = document.getElementById('playlist-videos');
    const addVideoButton = document.getElementById('add-video');
    let videoCount = 0;

    addVideoButton.addEventListener('click', () => {
        videoCount++;
        const videoName = prompt('Enter the name of the video:');
        const videoItem = document.createElement('div');
        videoItem.innerHTML = `<p>Video ${videoCount}: ${videoName}</p>`;
        playlistVideos.appendChild(videoItem);
    });
});
