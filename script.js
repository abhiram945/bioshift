document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        const img = document.createElement('img');
        const button = document.createElement('button');
        button.textContent = 'Send';
        img.src = e.target.result;
        img.alt = 'Preview Image';
        img.style.display = 'block';
        img.style.margin = 'auto';
        img.style.maxWidth = '50%';
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
        imagePreview.appendChild(button);
    }

    reader.readAsDataURL(file);
});