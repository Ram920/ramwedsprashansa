'use strict';
/* ===== EDIT HERE ===== */
const CFG={
  target:'2026-11-21T18:00:00+05:30',   /* शुभ विवाह / प्रीतिभोज संध्या 6 बजे से */
  music:'music.mp3',                    /* song file in this folder; the music button shows only if it exists */
  map:'Jeevansathi Banquet Hall, Hathsarganj (Adalpur), Hajipur, Vaishali, Bihar 844101',
  phones:['7903951687','7877715405']
};
const VENUE='स्थान: जीवन-साथी विवाह भवन, मोहल्ला हथसारगंज, वार्ड नं० 7, हाजीपुर, वैशाली';
const FN=[ /* कार्यक्रम – details from the bride's printed card; add "tm" only when a time is printed */
  {ic:'diya',t:'श्री सत्यनारायण भगवान का पूजा',d:'20 नवंबर 2026 (शुक्रवार)'},
  {ic:'matka',t:'घृतढ़ारी–मटकोर',d:'20 नवंबर 2026 (शुक्रवार)'},
  {ic:'baraat',t:'बारात आगमन',d:'21 नवंबर 2026 (शनिवार)'},
  {ic:'thali',t:'प्रीतिभोज',d:'21 नवंबर 2026 (शनिवार)',tm:'संध्या 6 बजे से'},
  {ic:'mandap',t:'शुभ विवाह',d:'21 नवंबर 2026 (शनिवार)',tm:'रात्रि बेला में'}
];
/* ===================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],R=(a,b)=>a+Math.random()*(b-a);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const intro=$('#intro');document.body.style.overflow='hidden';
$('#dir').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(CFG.map);
$('#acts').innerHTML=CFG.phones.map(p=>`<a class="btn" href="tel:+91${p}">कॉल करें: ${p}</a>`).join('');

/* ---------- illustrations ---------- */
const IC={
 diya:`<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path class="fl" d="M32 6c-6 8-6 13 0 18 6-5 6-10 0-18z" fill="#f2b84b"/><path d="M8 32c0 13 11 22 24 22s24-9 24-22z" fill="url(#gd)"/><ellipse cx="32" cy="32" rx="24" ry="5" fill="#ecd08a"/></svg>`,
 matka:`<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path class="sw" d="M32 6c-9 2-14 9-14 16 9-2 14-9 14-16zM32 6c9 2 14 9 14 16-9-2-14-9-14-16z" fill="#98b585"/><path d="M20 24c-8 7-8 26 12 28 20-2 20-21 12-28z" fill="url(#gd)"/><rect x="22" y="20" width="20" height="6" rx="3" fill="#cfa85c"/><circle cx="32" cy="38" r="4" fill="#f6e7b8"/></svg>`,
 thali:`<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path class="st" d="M24 22q-4-6 0-12M32 22q-4-6 0-12M40 22q-4-6 0-12" stroke="#b8a6e6" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="46" rx="26" ry="9" fill="url(#gd)"/><ellipse cx="32" cy="43" rx="19" ry="5.5" fill="#f6ecc9"/><circle cx="24" cy="42" r="3" fill="#c2447a"/><circle cx="32" cy="44" r="3" fill="#8c75d4"/><circle cx="40" cy="42" r="3" fill="#e9a33a"/></svg>`,
 mandap:`<svg class="ic" viewBox="0 0 64 64" aria-hidden="true"><path d="M12 58V26M52 58V26" stroke="#c9a15a" stroke-width="4"/><path d="M8 28q24-24 48 0" fill="none" stroke="#c9a15a" stroke-width="4"/><path d="M12 30q20-14 40 0z" fill="#d9c8f5" opacity=".8"/><path class="fl" d="M32 36c-5 7-5 11 0 14 5-3 5-7 0-14z" fill="#f2b84b"/><rect x="22" y="50" width="20" height="5" rx="2" fill="#c9a15a"/><path d="M18 22q2-4 4 0M42 22q2-4 4 0" stroke="#c2447a" stroke-width="2" fill="none"/></svg>`,
 baraat:`<span class="ic"><img src="assets/baraat.webp" alt="" loading="lazy"></span>`
};
const lily=c=>`<svg class="lily ${c}" aria-hidden="true"><use href="#lily"/></svg>`;
const bfs=c=>`<svg viewBox="0 0 40 40" style="--c:${c}"><g fill="currentColor"><g class="wl"><ellipse cx="11" cy="14" rx="10" ry="8" transform="rotate(-25 11 14)"/><ellipse cx="13" cy="27" rx="7" ry="6"/></g><g class="wr"><ellipse cx="29" cy="14" rx="10" ry="8" transform="rotate(25 29 14)"/><ellipse cx="27" cy="27" rx="7" ry="6"/></g></g><rect x="19" y="8" width="2" height="24" rx="1" fill="#6b5a90"/><path d="M20 9q-4-6-7-6M20 9q4-6 7-6" stroke="#6b5a90" fill="none" stroke-width=".8"/></svg>`;
const peacock=()=>{let f='';for(let i=0;i<13;i++)f+=`<g transform="rotate(${-66+i*11} 100 150)"><path d="M100 150V34" stroke="#6f9a7a" stroke-width="1"/><ellipse cx="100" cy="80" rx="12" ry="46" fill="url(#pg)" opacity=".45"/><ellipse cx="100" cy="42" rx="12" ry="17" fill="url(#pg)"/><ellipse cx="100" cy="42" rx="7.5" ry="11" fill="#d9b765"/><ellipse cx="100" cy="42" rx="4" ry="6.5" fill="#2b5fa8"/></g>`;
 return `<svg viewBox="0 0 200 230" aria-hidden="true"><g class="tail">${f}</g><ellipse cx="100" cy="188" rx="24" ry="20" fill="url(#pb)"/><g class="hd"><path d="M90 178C82 148 94 132 100 114C106 132 118 148 110 178Z" fill="url(#pb)"/><circle cx="100" cy="108" r="8" fill="#2f6fb0"/><path d="M100 100V88M96 101L91 90M104 101L109 90" stroke="#2f6fb0" stroke-width="1.3"/><circle cx="91" cy="89" r="2" fill="#d9b765"/><circle cx="100" cy="87" r="2" fill="#d9b765"/><circle cx="109" cy="89" r="2" fill="#d9b765"/><path d="M104 109l8 3-8 1z" fill="#d9b765"/><ellipse class="eye" cx="102" cy="106" rx="1.8" ry="2.2" fill="#fff"/></g></svg>`};
$('#pka').innerHTML=$('#pkb').innerHTML=peacock();

/* ---------- function cards ---------- */
$('#fns').innerHTML=FN.map(f=>`<article class="card glass rv" tabindex="0" role="button" aria-expanded="false">${lily('c1')}${lily('c2')}${IC[f.ic]}<h3>${f.t}</h3><p class="d">${f.d}</p>${f.tm?`<span class="tm">समय: ${f.tm}</span>`:''}<div class="more"><div><p>${VENUE}</p></div></div><span class="hint">विवरण देखने के लिए स्पर्श करें</span></article>`).join('');
$$('.card').forEach(c=>{
  const tog=()=>{const o=c.classList.toggle('open');c.setAttribute('aria-expanded',o)};
  c.addEventListener('click',tog);c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tog()}});
  c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect();c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');c.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*8+'deg')});
  c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
});

/* ---------- scratch to reveal ---------- */
const cv=$('#cv'),cx=cv.getContext('2d',{willReadFrequently:true});let done=false,down=false,last=null;
function foil(){const r=cv.getBoundingClientRect(),d=devicePixelRatio||1;cv.width=r.width*d;cv.height=r.height*d;cx.setTransform(d,0,0,d,0,0);cx.globalCompositeOperation='source-over';
 const g=cx.createLinearGradient(0,0,r.width,r.height);[[0,'#cdbff0'],[.3,'#f6f2ff'],[.55,'#bfb0e6'],[.8,'#efe9fb'],[1,'#b7a7e2']].forEach(s=>g.addColorStop(s[0],s[1]));
 cx.fillStyle=g;cx.fillRect(0,0,r.width,r.height);
 for(let i=0;i<320;i++){cx.fillStyle='rgba(255,255,255,'+R(.1,.8)+')';cx.fillRect(R(0,r.width),R(0,r.height),1.7,1.7)}
 cx.fillStyle='#5a4a8a';cx.font='19px "Tiro Devanagari Hindi",serif';cx.textAlign='center';cx.fillText('✦  यहाँ स्पर्श करें  ✦',r.width/2,r.height/2+6)}
const pos=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
function stroke(p){cx.globalCompositeOperation='destination-out';cx.lineWidth=40;cx.lineCap='round';cx.beginPath();cx.moveTo(last[0],last[1]);cx.lineTo(p[0],p[1]);cx.stroke();last=p}
cv.addEventListener('pointerdown',e=>{if(done)return;down=true;cv.setPointerCapture(e.pointerId);last=pos(e);stroke(last)});
cv.addEventListener('pointermove',e=>{if(down&&!done)stroke(pos(e))});
addEventListener('pointerup',()=>{if(down){down=false;check()}});
function check(){const d=cx.getImageData(0,0,cv.width,cv.height).data;let t=0,n=0;for(let i=3;i<d.length;i+=64){n++;if(d[i]<40)t++}if(t/n>.55)finish()}
function finish(){if(done)return;done=true;cv.style.opacity=0;cv.style.pointerEvents='none';$('#sc').classList.add('done');$('#rvBtn').hidden=true;
 for(let i=0;i<30;i++){const s=document.createElement('i');s.className='pt';const a=R(0,6.28),r=R(50,140);s.style.cssText=`--x:${Math.cos(a)*r}px;--y:${Math.sin(a)*r}px;animation-delay:${R(0,.3)}s`;$('#sc').append(s);setTimeout(()=>s.remove(),1900)}
 if(!reduce)petals(14,true);setTimeout(()=>$('#after').classList.add('show'),700)}
$('#openBtn').onclick=()=>{const s1=$('#s1');s1.classList.add('out');setTimeout(()=>{s1.hidden=true;$('#s2').hidden=false;foil()},600)};
$('#rvBtn').onclick=finish;
$('#full').onclick=()=>{intro.classList.add('leave');document.body.style.overflow='';if(a)a.play().catch(()=>{});
 setTimeout(()=>{intro.classList.add('gone');setTimeout(()=>{if(scrollY<40)cue.hidden=false},1800)},reduce?50:1250)};

/* ---------- music (optional) ---------- */
const a=new Audio(CFG.music),mb=$('#mus');a.loop=true;a.preload='metadata';
a.addEventListener('loadedmetadata',()=>mb.hidden=false);
const sync=()=>{mb.textContent=a.paused?'🔇':'🔊';mb.setAttribute('aria-label',a.paused?'संगीत चलाएँ':'संगीत बंद करें')};
a.onplay=a.onpause=sync;mb.onclick=()=>a.paused?a.play().catch(()=>{}):a.pause();

/* ---------- petals ---------- */
function petals(n,burst){const L=$('#petals'),C=['#d8ccf5','#ffffff','#e8d9a8','#c9b8ee','#f2cfe0'];
 for(let i=0;i<n;i++){const p=document.createElement('i'),s=9+R(0,9);p.className='pl';p.style.cssText=`left:${R(0,100)}%;width:${s}px;height:${s*1.25}px;background:${C[i%5]};animation-duration:${burst?R(4,7):R(12,22)}s;animation-delay:${burst?R(0,1.2):-R(0,20)}s;--dx:${R(-60,60)}px;--r:${R(240,600)}deg`;L.append(p);if(burst)setTimeout(()=>p.remove(),9000)}}
if(!reduce)petals(18);

/* ---------- butterflies (tap one and it flies away) ---------- */
function wander(el){let x=R(0,innerWidth-50),y=R(0,innerHeight-50);el.style.transform=`translate(${x}px,${y}px)`;
 const go=()=>{const nx=R(10,innerWidth-56),ny=R(10,innerHeight-70),d=R(5,9);el.style.transition=`transform ${d}s cubic-bezier(.45,.05,.55,.95)`;el.style.transform=`translate(${nx}px,${ny}px) rotate(${nx>x?18:-18}deg)`;x=nx;el._t=setTimeout(go,d*1000+R(0,1500))};
 el.addEventListener('pointerdown',e=>{e.preventDefault();clearTimeout(el._t);const fx=x<innerWidth/2?-100:innerWidth+70;el.style.transition='transform 1.6s ease-in';el.style.transform=`translate(${fx}px,${R(-80,innerHeight*.5)}px) rotate(${fx<0?-40:40}deg)`;x=fx;el._t=setTimeout(go,2400)});
 setTimeout(go,R(300,1500))}
function resident(el,host){let cur=-1,x=0;const spots=()=>$$('#panel [data-land]');
 const pos=s=>{const p=host.getBoundingClientRect(),r=s.getBoundingClientRect();return[r.left-p.left+r.width*R(.15,.85)-23,r.top-p.top-R(8,20)]};
 const mv=(nx,ny,d,cb)=>{el.style.transition=`transform ${d}s cubic-bezier(.45,.05,.55,.95)`;el.style.transform=`translate(${nx}px,${ny}px) rotate(${nx>x?15:-15}deg)`;x=nx;el._t=setTimeout(cb,d*1000)};
 const land=()=>{const S=spots();let i;do{i=Math.floor(R(0,S.length))}while(i===cur&&S.length>1);cur=i;const q=pos(S[i]);
  mv(q[0],q[1],R(2.5,4),()=>{el.classList.add('rest');el._t=setTimeout(()=>{el.classList.remove('rest');const P=host.getBoundingClientRect();mv(R(-60,P.width+40),R(-90,P.height+60),R(2.5,4),land)},R(3500,6500))})};
 el.addEventListener('pointerdown',e=>{e.preventDefault();clearTimeout(el._t);el.classList.remove('rest');const P=host.getBoundingClientRect();mv(x<P.width/2?-P.width*.7:P.width*1.6,R(-160,P.height+140),1.6,()=>{el._t=setTimeout(land,1200)})});
 x=R(0,host.offsetWidth);el.style.transform=`translate(${x}px,-40px)`;setTimeout(land,900)}
if(!reduce){
 ['#9d86e0','#ffffff','#d9b765','#b9a3ee'].forEach((c,i)=>{const b=document.createElement('div');b.className='bf';b.innerHTML=bfs(c);b.style.opacity=.9;$('#bfl').append(b);wander(b)});
 const host=$('.stg');['#9d86e0','#d9b765'].forEach(c=>{const b=document.createElement('div');b.className='bf';b.style.zIndex=3;b.innerHTML=bfs(c);host.append(b);resident(b,host)})}

/* ---------- countdown (English digits) ---------- */
(function(){const t=Date.parse(CFG.target),z=n=>String(n).padStart(2,'0');if(isNaN(t))return;
 const f=()=>{const s=Math.max(0,Math.floor((t-Date.now())/1e3));$('#cd').textContent=Math.floor(s/86400);$('#ch').textContent=z(Math.floor(s%86400/3600));$('#cm').textContent=z(Math.floor(s%3600/60));$('#cs').textContent=z(s%60)};f();setInterval(f,1000)})();

/* ---------- scroll cue, reveal, progress ---------- */
const cue=$('#cue');cue.onclick=()=>{scrollBy({top:innerHeight*.85,behavior:reduce?'auto':'smooth'});cue.hidden=true};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
addEventListener('scroll',()=>{if(scrollY>60)cue.hidden=true;const h=document.documentElement;$('#bar').style.width=(scrollY/(h.scrollHeight-innerHeight||1)*100)+'%'},{passive:true});
