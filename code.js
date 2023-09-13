const con = document.querySelector('main');
const dot = document.querySelector('.dots');
con.addEventListener('mousemove',e =>{
    dot.style.left= e.x - 10 +'px';
    dot.style.top=  e.y - 10 +'px';
});