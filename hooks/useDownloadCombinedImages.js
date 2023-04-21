export default function useDownloadCombinedImages(id) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var images = document.getElementById(id).getElementsByTagName('img');
    canvas.width = images[0].width * 5;
    canvas.height = images[0].height;
    for (var i = 0; i < images.length; i++) {
      ctx.drawImage(images[i], i * images[0].width, 0);
    }
    var link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'imagen-combinada.png';
    link.click();
  }