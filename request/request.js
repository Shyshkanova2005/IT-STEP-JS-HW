document.getElementById('xhrRequest').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false); 

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            console.log("XMLHttpRequest Response:", xhr.responseText);
        }
    };
    xhr.send();
});

// Fetch API
document.getElementById('fetchRequest').addEventListener('click', function() {
    fetch("https://jsonplaceholder.typicode.com/comments/2")
        .then(response => response.json())
        .then(data => console.log("Fetch API Response:", data))
        .catch(error => console.error('Fetch Error:', error));
});

// jQuery.ajax
document.getElementById('jqueryRequest').addEventListener('click', function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/albums/3",
        method: "GET"
    }).done(function(data) {
        console.log("jQuery.ajax Response:", data);
    }).fail(function(error) {
        console.error('jQuery.ajax Error:', error);
    });
});