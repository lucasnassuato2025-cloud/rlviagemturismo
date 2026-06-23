const airplaneStyle=document.createElement('style');
airplaneStyle.textContent=`.hero-card{isolation:isolate}.hero-card:before{content:"";position:absolute;inset:-18px -32px auto auto;width:82%;height:72%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 520'%3E%3Cg fill='none' stroke='%23e11c24' stroke-width='13' stroke-linecap='round' stroke-linejoin='round' opacity='.9'%3E%3Cpath d='M120 312 C270 235 438 176 730 88 C790 70 828 80 842 103 C858 130 828 157 771 174 L566 235 L618 384 L570 403 L470 264 L300 315 L275 397 L235 410 L224 332 L120 312 Z'/%3E%3Cpath d='M286 315 L182 404'/%3E%3Cpath d='M566 235 L760 377'/%3E%3Cpath d='M142 343 C268 419 507 445 744 363' stroke-width='7' opacity='.45'/%3E%3C/g%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center;background-size:contain;opacity:.075;transform:rotate(-7deg);z-index:0;pointer-events:none}.hero-card:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 86% 16%,rgba(225,28,36,.10),transparent 38%);z-index:0;pointer-events:none}.hero-card>*{position:relative;z-index:1}.hc-route{background:rgba(255,247,247,.86);backdrop-filter:blur(2px)}`;
document.head.appendChild(airplaneStyle);
const WA='5513982271412',TEL='tel:+551333266831';
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