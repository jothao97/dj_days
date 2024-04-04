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
                albumItem.textContent = `${album.artist} - ${album.title}`;
                albumList.appendChild(albumItem);
            }
        }

        // list of album to display in albumlist array
        addAlbum("The Beatles", "Abbey Road");
        addAlbum("Michael Jackson", "Thriller");
        addAlbum("Dylan", "Highway 61 Revisited");
        addAlbum("Madonna", "Like a Prayer");
        addAlbum("Queen", "A Night at the Opera");
        addAlbum("Led Zeppelin", "Led Zeppelin IV");
        addAlbum("Pink Floyd", "The Dark Side of the Moon");
        addAlbum("Prince", "Purple Rain");
        addAlbum("David Bowie", "The Rise and Fall of Ziggy Stardust and the Spiders from Mars");
        addAlbum("Nirvana", "Nevermind");

        //display the albums in the album list
        displayAlbums();

/// this section is to be able to add new albums and make them appear on the album list

        document.getElementById('add-album-btn').onclick = () => {
            const artist = document.getElementById('artist-input').value;
            const title = document.getElementById('album-title-input').value;
            const genre = document.getElementById('genre-input').value;
            const album = new albumlist(artist, title, genre);
            albumListArray.push(album);

            displayArrayAsList(albumListArray, 'recently-added-list');
        }

})


