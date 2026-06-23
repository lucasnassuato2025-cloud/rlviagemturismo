const WA='5513982271412',TEL='tel:+551333266831';
const HERO_PLANE="https://images.unsplash.com/photo-1614602535206-7d5100e065e0?auto=format&fit=crop&w=2400&q=90";
const hero=document.querySelector('.hero');
if(hero){
  hero.style.position='relative';
  hero.style.minHeight='calc(100vh - 74px)';
  hero.style.display='flex';
  hero.style.alignItems='center';
  hero.style.backgroundImage=`linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.91) 44%,rgba(255,255,255,.68) 70%,rgba(255,255,255,.35) 100%),url('${HERO_PLANE}')`;
  hero.style.backgroundRepeat='no-repeat,no-repeat';
  hero.style.backgroundPosition='center,right 6% center';
  hero.style.backgroundSize='cover,auto 86%';
}
function adjustHeroPlane(){
  if(!hero)return;
  if(window.innerWidth<700){
    hero.style.minHeight='auto';
    hero.style.backgroundImage=`linear-gradient(180deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.89) 58%,rgba(255,255,255,.80) 100%),url('${HERO_PLANE}')`;
    hero.style.backgroundPosition='center,center top 18px';
    hero.style.backgroundSize='cover,92% auto';
  }else if(window.innerWidth<980){
    hero.style.minHeight='auto';
    hero.style.backgroundImage=`linear-gradient(180deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.86) 60%,rgba(255,255,255,.76) 100%),url('${HERO_PLANE}')`;
    hero.style.backgroundPosition='center,center top 10px';
    hero.style.backgroundSize='cover,78% auto';
  }else{
    hero.style.minHeight='calc(100vh - 74px)';
    hero.style.backgroundImage=`linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.91) 44%,rgba(255,255,255,.68) 70%,rgba(255,255,255,.35) 100%),url('${HERO_PLANE}')`;
    hero.style.backgroundPosition='center,right 6% center';
    hero.style.backgroundSize='cover,auto 86%';
  }
}
adjustHeroPlane();
window.addEventListener('resize',adjustHeroPlane);
const heroCard=document.querySelector('.hero-card');
if(heroCard){
  heroCard.style.background='rgba(255,255,255,.86)';
  heroCard.style.backdropFilter='blur(10px)';
  heroCard.style.border='1px solid rgba(255,255,255,.72)';
  heroCard.style.boxShadow='0 28px 70px rgba(0,0,0,.14)';
}
function openWA(msg){location.href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg||'Olá! Vim pelo site da RL Viagens.');}
document.addEventListener('click',e=>{const wa=e.target.closest('[data-wa]');if(wa){e.preventDefault();openWA(wa.getAttribute('data-wa'));}});
document.querySelectorAll('[data-tel]').forEach(a=>a.setAttribute('href',TEL));
const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
const b=document.getElementById('menuBtn'),n=document.getElementById('navlinks');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
const fallback='assets/galeria/foto-01.webp';
const destinos=[
['Maceió','Praias cristalinas, mar azul e roteiro perfeito para descansar.','Nordeste','assets/galeria/foto-18.webp'],
['Porto Seguro','Praia, diversão e pacote ideal para família e amigos.','Bahia','assets/galeria/foto-15.webp'],
['Gramado','Serra gaúcha, gastronomia e clima romântico.','Sul','assets/galeria/foto-14.webp'],
['Orlando','Disney, parques, compras e roteiro completo.','Estados Unidos','assets/galeria/foto-05.webp'],
['Cancún','Resorts, mar azul e experiência premium.','México','assets/galeria/foto-08.webp'],
['Lisboa','História, cultura e boa gastronomia.','Portugal','assets/galeria/foto-01.webp']
];
const grid=document.getElementById('pkgGrid');
if(grid){destinos.forEach(d=>{const card=document.createElement('article');card.className='pkg-card';card.innerHTML='<div class="pkg-img"><img src="'+d[3]+'" alt="'+d[0]+'" loading="lazy" onerror="this.onerror=null;this.src=\''+fallback+'\'"></div><span class="tag">'+d[2]+'</span><h3>'+d[0]+'</h3><p>'+d[1]+'</p><a class="btn-red" data-wa="Olá! Quero cotar pacote para '+d[0]+' ✈️">Cotar '+d[0]+'</a>';grid.appendChild(card)});}
const form=document.getElementById('qform');
if(form)form.addEventListener('submit',e=>{e.preventDefault();let nome=document.getElementById('f-nome')?.value||'',dest=document.getElementById('f-destino')?.value||'',data=document.getElementById('f-data')?.value||'',pes=document.getElementById('f-pessoas')?.value||'',obs=document.getElementById('f-obs')?.value||'';let msg=`Olá! Quero uma cotação pela RL Viagens.\n\nNome: ${nome}\nDestino: ${dest}\nData: ${data}\nPessoas: ${pes}\nObs: ${obs}`;openWA(msg)});