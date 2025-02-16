
function changeImage(image) {
  var largeImageDiv = document.getElementById('image');
  largeImageDiv.innerHTML = '<img src="' + image.src + '" alt="Large Image">';
}
