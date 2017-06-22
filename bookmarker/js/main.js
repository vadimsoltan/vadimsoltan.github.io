// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {

    //get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    if(!validateForm(siteName, siteURL)) {
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteURL
    }

    // test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null) {
        
        // init array
        var bookmarks = [];
        
        // add to the array
        bookmarks.push(bookmark);
        
        // set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {

        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        
        // add bookmark to array
        bookmarks.push(bookmark);
        
        // Re-set it back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Clear form
    document.getElementById('myForm').reset();

    // Re-fetch bookmarks
    fetchBookmarks();

    // prevent form from submitting
    e.preventDefault();
}

// delete bookmark
function deleteBookmark(url) {

    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // loop through bookmarks
    for(var i = 0; i <bookmarks.length; i++){
        if(bookmarks[i].url == url) {
            //Remove from array
            bookmarks.splice(i, 1);
        }
    }
    // Re-set it back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
}

// fetch Bookmarks
function fetchBookmarks() {

    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
    }
}

// Validate form
function validateForm(siteName, siteURL) {
    if(!siteName || !siteURL) {
        alert('Please fill in the form')
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteURL.match(regex)) {
        alert('Please use a valid URL');
        return false;

    }

    return true;
}
