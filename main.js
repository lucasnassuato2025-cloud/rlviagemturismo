const WA='5513982271412',TEL='tel:+551333266831';
function openWA(msg){location.href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg||'Olá! Vim pelo site da RL Viagens.')}
document.addEventListener('click',e=>{const wa=e.target.closest('[data-wa]');if(wa){e.preventDefault();openWA(wa.getAttribute('data-wa'))}});
document.querySelectorAll('[data-tel]').forEach(a=>a.setAttribute('href',TEL));
const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
const b=document.getElementById('menuBtn'),n=document.getElementById('navlinks');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
const destinos=[
['Maceió','Praias cristalinas, mar azul e roteiro perfeito para descansar.','Nordeste','https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?auto=format&fit=crop&w=900&q=80'],
['Porto Seguro','Praia, diversão e pacote ideal para família e amigos.','Bahia','https://images.unsplash.com/photo-1596422846543-75c6fc197f11?auto=format&fit=crop&w=900&q=80'],
['Gramado','Serra gaúcha, gastronomia e clima romântico.','Sul','https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=900&q=80'],
['Orlando','Disney, parques, compras e roteiro completo.','Estados Unidos','https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80'],
['Cancún','Resorts, mar azul e experiência premium.','México','https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=900&q=80'],
['Lisboa','História, cultura e boa gastronomia.','Portugal','https://images.unsplash.com/photo-1513735492246-483525079686?auto=format&fit=crop&w=900&q=80']
];
const grid=document.getElementById('pkgGrid');
if(grid)destinos.forEach(d=>{const card=document.createElement('article');card.className='pkg-card';card.innerHTML='<div class="pkg-img"><img src="'+d[3]+'" alt="'+d[0]+'" loading="lazy" onerror="this.parentElement.classList.add(\'fallback\');this.remove()"></div><span class="tag">'+d[2]+'</span><h3>'+d[0]+'</h3><p>'+d[1]+'</p><a class="btn-red" data-wa="Olá! Quero cotar pacote para '+d[0]+' ✈️">Cotar '+d[0]+'</a>';grid.appendChild(card)});
const form=document.getElementById('qform');if(form)form.addEventListener('submit',e=>{e.preventDefault();let nome=document.getElementById('f-nome')?.value||'',dest=(document.getElementById('f-destino')?.value)||(function(){var _p=document.getElementById('f-pais')?.value||'';var _c=document.getElementById('f-cidade')?.value||'';return [_c,_p].filter(Boolean).join(' - ')})(),data=document.getElementById('f-data')?.value||'',pes=document.getElementById('f-pessoas')?.value||'',obs=document.getElementById('f-obs')?.value||'';let msg=`Olá! Quero uma cotação pela RL Viagens.\n\nNome: ${nome}\nDestino: ${dest}\nData: ${data}\nPessoas: ${pes}\nObs: ${obs}`;openWA(msg)});