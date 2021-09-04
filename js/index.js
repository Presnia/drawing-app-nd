const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const clearBtn = document.getElementById('clear');
const sizeEl = document.getElementById('size');
const inputColor = document.getElementById('color');

let size = 20;
let isPressed = false;
let color = 'black';
let x, y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

decreaseBtn.addEventListener('click', () => {
  let res = Number(sizeEl.innerText) - 5;

  if (res > 0) {
    sizeEl.innerText = res;
    size = res;
  }
});

increaseBtn.addEventListener('click', () => {
  let res = Number(sizeEl.innerText) + 5;

  if (res <= 50) {
    sizeEl.innerText = res;
    size = res;
  }
});

inputColor.addEventListener('change', () => {
  color = inputColor.value;
});

clearBtn.addEventListener('click', () => {
  document.location.reload();
});
