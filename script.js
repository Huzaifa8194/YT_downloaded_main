var convertBtn = document.querySelector('.download-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(URL) {
    var formatSelect = document.getElementById("formatSelect");
    var format = formatSelect.value;
    if (isValidURL(URL)) {
        window.location.href = `http://localhost:4000/download?URL=${encodeURIComponent(URL)}&format=${format}`;
    } else {
        alert("Invalid YouTube URL!");
    }
}

function isValidURL(URL) {
    // Updated regex to include youtu.be and different URL formats
    var pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return pattern.test(URL);
}