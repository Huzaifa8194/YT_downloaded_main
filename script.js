var convertBtn = document.querySelector('.download-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(URL) {
   
    
    if (isValidURL(URL)) {
        var quality = document.getElementById("qualitySelect").value;
        window.location.href = `http://localhost:4000/download?URL=${URL}&quality=${quality}`;
    } else {
        alert("Invalid YouTube URL!");
    }

}

function isValidURL(URL) {
    // Regular expression to validate YouTube URL
    var pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/;
    return pattern.test(URL);
}

