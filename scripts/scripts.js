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

        // function to display the list of albums
        function displayAlbums(){
            let albumList = document.getElementById("album-list-js");
            albumList.innerHTML= "";
        

            // looping through each album in the album list to create list item for each
            for (let i=0; i < albumListArray.length, i++;){
                let album = albumListArray[i];
                let albumItem = document.createElement('li');
                albumItem.textContent = `${album.artist} - ${album.title} Genre: ${album.genre}`;
                albumList.appendchild(albumItem);
            }
        }

        // list of album to display in albumlist array
        addAlbum("The Beatles", "Abbey Road", "genre");
        addAlbum("Michael Jackson", "Thriller", "genre");
        addAlbum("Dylan", "Highway 61 Revisited", "genre");
        addAlbum("Madonna", "Like a Prayer", "genre");
        addAlbum("Queen", "A Night at the Opera", "genre");
        addAlbum("Led Zeppelin", "Led Zeppelin IV", "genre");
        addAlbum("Pink Floyd", "The Dark Side of the Moon", "genre");
        addAlbum("Prince", "Purple Rain", "genre");
        addAlbum("David Bowie", "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", "genre");
        addAlbum("Nirvana", "Nevermind", "genre");

        //display the albums in the album list
        displayAlbums();
})