// This section is to see the JS display the albumlist already made

document.addEventListener("DOMContentLoaded", function() {
        // define an array to store a list of albums and the information
        let albumListArray = [];

        // function to add an album to the album list
        function addAlbum (artist, title, genre){
            let album= {
                artist: artist,
                title: title,
                genre: genre
            };
            albumListArray.push(album);
            console.log(albumListArray);
        }

        // creating class for albumlist
        class albumlist {
            constructor(artist, title, genre){
                this.artist = artist;
                this.title = title;
                this.genre = genre;
            }
        }

        // function to display the list of albums
        function displayAlbums(){
            let albumList = document.getElementById("album-list-js");
            albumList.innerHTML= "";
        

            // looping through each album in the album list to create list item for each
            for (let i=0; i < albumListArray.length; i++){
                let album = albumListArray[i];
                let albumItem = document.createElement('li');
                albumItem.textContent = `${album.artist} - ${album.title} Genre: ${album.genre}`;
                albumList.appendChild(albumItem);
            }
        }

        // list of album to display in albumlist array
        addAlbum("Katy Perry", "Teenage Dream", "Pop");
        addAlbum("Michael Jackson", "Thriller", "Pop");
        addAlbum("Taylor Swift", "Speak Now", "Pop");
        addAlbum("Madonna", "Like a Prayer", "Pop");
        addAlbum("Justin Bieber", "My World", "Pop");
        addAlbum("Olivia Rodrigo", "GUTS", "Pop");
        addAlbum("Dua Lipa", "Future Nostalgia", "Pop");
        addAlbum("Lady Gaga", "Chromatica", "Pop");
        addAlbum("Mac Miller", "Circles", "Rap");
        addAlbum("Nirvana", "Nevermind", "EDM");

        //display the albums in the album list
        displayAlbums();

/// this section is to be able to add new albums and make them appear on the album list

                // Get the form element
        const addAlbumForm = document.getElementById('add-album-form');

        // Add event listener for form submission
        addAlbumForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get values from form inputs
            const artist = document.getElementById('artist-input').value;
            const title = document.getElementById('album-title-input').value;
            const genre = document.getElementById('genre-input').value;

            // Create a new album object using the addAlbum function
            addAlbum(artist, title, genre);

            // Display the updated album list
            displayAlbums();

            // Clear the form inputs
            addAlbumForm.reset();

    })
})
