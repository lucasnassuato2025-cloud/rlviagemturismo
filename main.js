const WA='5513982271412',TEL='tel:+551333266831';
const hero=document.querySelector('.hero');
if(hero){
  hero.style.position='relative';
  hero.style.minHeight='calc(100vh - 74px)';
  hero.style.display='flex';
  hero.style.alignItems='center';
  hero.style.background="linear-gradient(90deg,rgba(255,255,255,.96),rgba(255,255,255,.84),rgba(255,255,255,.42)),url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90') center right/cover no-repeat";
}
const heroCard=document.querySelector('.hero-card');
if(heroCard){
  heroCard.style.background='rgba(255,255,255,.84)';
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