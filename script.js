document.getElementById('webbuild').addEventListener('click', function () {
    var image = this;
    image.classList.add('zoomed');
    setTimeout(function() {
        window.location.href = 'https://webbuild.js.org';
    }, 1000);
});