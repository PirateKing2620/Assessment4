const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

fortuneBtn.addEventListener('click', getFortune)


const rubberDuckyImg = document.getElementById("rubberDucky")

const touchRubberDucky = () => {
    axios.get('http://localhost:4000/api/rubberDucky/')
    .then(res => {
        const data = res.data;
        alert(data)
    })
    }

rubberDuckyImg.addEventListener('mouseover', touchRubberDucky);


const helloBtn = document.getElementById("userBtn")

const helloUser = () => {
    axios.get('http://localhost:4000/api/user/')
    .then(res => {
        const data = res.data;
        alert(data)
    })
    }

helloBtn.addEventListener('click', helloUser)


const pirateShip = document.getElementById("flyingDutchman")

const pirateQuote = () => {
    axios.get('http://localhost:4000/api/quote/')
    .then(res => {
        const data = res.data;
        alert(data)
    })
}

pirateShip.addEventListener('mouseover', pirateQuote)










// create canvas element and append it to document body
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}