var currentImage = 1;
    var totalImages = 3;

    function changeImage() {
        currentImage = (currentImage % totalImages) + 1;
        var img = document.getElementById('image');
        img.src = 'img' + currentImage + '.jpg';
    }

    document.getElementById('imageForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var img = document.getElementById('image');
        img.alt = document.getElementById('altText').value;
        img.style.width = document.getElementById('width').value + 'px';
        img.style.height = document.getElementById('height').value + 'px';
        img.style.borderWidth = document.getElementById('borderWidth').value + 'px';
    });