const WA='5513982271412',TEL='tel:+551333266831';
const hero=document.querySelector('.hero');
if(hero){
  const plane='https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=2400&q=90';
  hero.style.position='relative';
  hero.style.overflow='hidden';
  hero.style.minHeight='calc(100vh - 74px)';
  hero.style.display='flex';
  hero.style.alignItems='center';
  hero.style.backgroundImage=`linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.88) 38%,rgba(255,255,255,.64) 66%,rgba(255,255,255,.35) 100%),url('${plane}')`;
  hero.style.backgroundRepeat='no-repeat';
  hero.style.backgroundPosition='center center';
  hero.style.backgroundSize='cover';
}
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
const destinos=[
['Maceió','Praias cristalinas, mar azul e roteiro perfeito para descansar.','Nordeste','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'],
['Porto Seguro','Praia, diversão e pacote ideal para família e amigos.','Bahia','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'],
['Gramado','Serra gaúcha, gastronomia e clima romântico.','Sul','https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'],
['Orlando','Parques, compras e roteiro completo para a família.','Estados Unidos','https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80'],
['Cancún','Resorts, mar azul e experiência premium.','México','https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80'],
['Lisboa','História, cultura e boa gastronomia.','Portugal','https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80']
];
const grid=document.getElementById('pkgGrid');
if(grid){destinos.forEach(d=>{const card=document.createElement('article');card.className='pkg-card';card.innerHTML='<div class="pkg-img"><img src="'+d[3]+'" alt="Pacote de viagem para '+d[0]+'" loading="lazy" onerror="this.parentElement.classList.add(\'fallback\');this.remove()"></div><span class="tag">'+d[2]+'</span><h3>'+d[0]+'</h3><p>'+d[1]+'</p><a class="btn-red" data-wa="Olá! Quero cotar pacote para '+d[0]+' ✈️">Cotar '+d[0]+'</a>';grid.appendChild(card)});}
const form=document.getElementById('qform');
if(form)form.addEventListener('submit',e=>{e.preventDefault();let nome=document.getElementById('f-nome')?.value||'',dest=document.getElementById('f-destino')?.value||'',data=document.getElementById('f-data')?.value||'',pes=document.getElementById('f-pessoas')?.value||'',obs=document.getElementById('f-obs')?.value||'';let msg=`Olá! Quero uma cotação pela RL Viagens.\n\nNome: ${nome}\nDestino: ${dest}\nData: ${data}\nPessoas: ${pes}\nObs: ${obs}`;openWA(msg)});