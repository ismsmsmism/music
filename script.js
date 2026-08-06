const audio=document.getElementById('audio');
const tracks=[...document.querySelectorAll('.track')];
let i=0;
function load(n){i=n;tracks.forEach(t=>t.classList.remove('active'));tracks[i].classList.add('active');audio.src=tracks[i].dataset.src;document.getElementById('song').textContent=tracks[i].textContent;}
load(0);
play.onclick=()=>audio.play();
pause.onclick=()=>audio.pause();
stop.onclick=()=>{audio.pause();audio.currentTime=0;}
prev.onclick=()=>{load((i-1+tracks.length)%tracks.length);audio.play();}
next.onclick=()=>{load((i+1)%tracks.length);audio.play();}
tracks.forEach((t,n)=>t.onclick=()=>{load(n);audio.play();});
vol.oninput=e=>audio.volume=e.target.value;
audio.ontimeupdate=()=>{time.textContent=new Date(audio.currentTime*1000).toISOString().substring(14,19);if(audio.duration)progress.value=audio.currentTime/audio.duration*100;}
const c=viz,ctx=c.getContext('2d');
setInterval(()=>{ctx.clearRect(0,0,c.width,c.height);for(let x=0;x<c.width;x+=8){let h=Math.random()*60;ctx.fillStyle='#44ff44';ctx.fillRect(x,c.height-h,5,h);}},60);
