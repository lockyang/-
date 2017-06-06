

// 获取图片
var input = document.createElement('input');
input.type = 'file';
input.addEventListener('change', function() {
  var file = this.files[0];
});
input.click();

// 图片预览
// 1.
var img = document.createElement('img');
img.src = window.URL.createObjectURL(file);
// 2.
var img = document.createElement("img");
var reader = new FileReader();
reader.onload = function(e) {
  img.src = e.target.result;
}
reader.readAsDataURL(file);

// 略缩图
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var MAX_WIDTH = 800;
var MAX_HEIGHT = 600;
var width = img.width;
var height = img.height;

if (width > height) {
  if (width > MAX_WIDTH) {
    height *= MAX_WIDTH / width;
    width = MAX_WIDTH;
  }
} else {
  if (height > MAX_HEIGHT) {
    width *= MAX_HEIGHT / height;
    height = MAX_HEIGHT;
  }
}
canvas.width = width;
canvas.height = height;
ctx.drawImage(img, 0, 0, width, height);

// 上传
canvas.toBlob(function(blob) {
  var form = new FormData();
  form.append('file', blob);
  fetch('/api/upload', {method: 'POST', body: form});
});

// Polyfill
if (!HTMLCanvasElement.prototype.toBlob) {
 Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
  value: function (callback, type, quality) {

    var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (var i = 0; i < len; i++ ) {
     arr[i] = binStr.charCodeAt(i);
    }

    callback( new Blob( [arr], {type: type || 'image/png'} ) );
  }
 });
}

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob