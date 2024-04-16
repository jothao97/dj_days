function fetchPlaylist(){
    fetch('/api/playlist')
    .then(response => response.json())
    .then(playlist => displayPlaylist(playlist))
    .catch(err => console.error('Error fetching playlist', err))
}

function addPlaylist() { 
    const artist = document.getElementById('artist-input').value;
    const title = document.getElementById('album-title-input').value;
    const genre = document.getElementById('genre-input').value;
    const newPlaylist = {artist, title, genre};


    fetch('/api/playlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlaylist)
    })
    .then(response => {
        if(response.ok) {
            return fetchPlaylist();
        }
        throw new Error('Failed to add playlist');
    })
    .catch(err => console.error('Error adding playlist', err));
        document.getElementById('artist-input').value = '';
        document.getElementById('album-title-input').value = '';
        document.getElementById('genre-input').value = '';
}

function displayPlaylist (playlist) {
    const playlistList = document.getElementById('scoredList');
    playlistList.innerHTML = '';

    playlist.forEach(playlist => {
        const li = document.createElement('li');
        li.textContent = `${playlist.artist} ${playlist.title} ${playlist.genre}`
        playlistList.appendChild.apply(li);
    });
}


fetchPlaylist();
