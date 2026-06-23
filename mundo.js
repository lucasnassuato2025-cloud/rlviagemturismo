/* Popula País (todos os continentes) e o autocomplete de Cidades no formulário de contato */
(function(){
  var paises = {
    "América do Sul": ["Argentina","Bolívia","Brasil","Chile","Colômbia","Equador","Guiana","Guiana Francesa","Paraguai","Peru","Suriname","Uruguai","Venezuela"],
    "América do Norte e Central": ["Bahamas","Belize","Canadá","Costa Rica","Cuba","El Salvador","Estados Unidos","Guatemala","Haiti","Honduras","Jamaica","México","Nicarágua","Panamá","Porto Rico","República Dominicana","Trinidad e Tobago","Aruba","Curaçao"],
    "Europa": ["Albânia","Alemanha","Áustria","Bélgica","Bósnia e Herzegovina","Bulgária","Chipre","Croácia","Dinamarca","Escócia","Eslováquia","Eslovênia","Espanha","Estônia","Finlândia","França","Grécia","Hungria","Irlanda","Islândia","Itália","Letônia","Lituânia","Luxemburgo","Malta","Mônaco","Montenegro","Macedônia do Norte","Noruega","Países Baixos (Holanda)","Polônia","Portugal","Reino Unido","República Tcheca","Romênia","Rússia","Sérvia","Suécia","Suíça","Ucrânia"],
    "Ásia": ["Bangladesh","Brunei","Camboja","Cazaquistão","China","Cingapura","Coreia do Sul","Filipinas","Hong Kong","Índia","Indonésia","Japão","Laos","Malásia","Maldivas","Mongólia","Myanmar","Nepal","Paquistão","Sri Lanka","Tailândia","Taiwan","Uzbequistão","Vietnã"],
    "Oriente Médio": ["Arábia Saudita","Armênia","Azerbaijão","Bahrein","Catar","Emirados Árabes Unidos","Geórgia","Israel","Jordânia","Kuwait","Líbano","Omã","Turquia"],
    "África": ["África do Sul","Angola","Argélia","Botsuana","Cabo Verde","Egito","Etiópia","Gana","Quênia","Madagascar","Marrocos","Maurício","Moçambique","Namíbia","Nigéria","Senegal","Seychelles","Tanzânia","Tunísia","Zimbábue"],
    "Oceania": ["Austrália","Fiji","Nova Caledônia","Nova Zelândia","Polinésia Francesa (Taiti)","Samoa"]
  };
  var cidades = [
    // Brasil
    "Rio de Janeiro, Brasil","São Paulo, Brasil","Salvador, Brasil","Maceió, Brasil","Recife, Brasil","Porto Seguro, Brasil","Fortaleza, Brasil","Natal, Brasil","Fernando de Noronha, Brasil","Florianópolis, Brasil","Gramado, Brasil","Foz do Iguaçu, Brasil","Bonito, Brasil","Jericoacoara, Brasil","Búzios, Brasil","Porto de Galinhas, Brasil","Brasília, Brasil","Manaus, Brasil","Campos do Jordão, Brasil",
    // América
    "Nova York, EUA","Orlando, EUA","Miami, EUA","Las Vegas, EUA","Los Angeles, EUA","San Francisco, EUA","Chicago, EUA","Washington, EUA","Toronto, Canadá","Vancouver, Canadá","Montreal, Canadá","Cidade do México, México","Cancún, México","Punta Cana, Rep. Dominicana","Havana, Cuba","San José, Costa Rica","Buenos Aires, Argentina","Bariloche, Argentina","Mendoza, Argentina","Santiago, Chile","Lima, Peru","Cusco, Peru","Cartagena, Colômbia","Bogotá, Colômbia","Medellín, Colômbia","Montevidéu, Uruguai","Quito, Equador","Galápagos, Equador",
    // Europa
    "Lisboa, Portugal","Porto, Portugal","Madri, Espanha","Barcelona, Espanha","Sevilha, Espanha","Paris, França","Nice, França","Londres, Inglaterra","Edimburgo, Escócia","Dublin, Irlanda","Amsterdã, Holanda","Bruxelas, Bélgica","Roma, Itália","Veneza, Itália","Milão, Itália","Florença, Itália","Nápoles, Itália","Berlim, Alemanha","Munique, Alemanha","Frankfurt, Alemanha","Viena, Áustria","Zurique, Suíça","Genebra, Suíça","Praga, Rep. Tcheca","Budapeste, Hungria","Atenas, Grécia","Santorini, Grécia","Mykonos, Grécia","Istambul, Turquia","Capadócia, Turquia","Moscou, Rússia","Estocolmo, Suécia","Copenhague, Dinamarca","Oslo, Noruega","Helsinque, Finlândia","Varsóvia, Polônia","Dubrovnik, Croácia",
    // Oriente Médio / África
    "Dubai, Emirados Árabes","Abu Dhabi, Emirados Árabes","Doha, Catar","Jerusalém, Israel","Tel Aviv, Israel","Petra, Jordânia","Marrakech, Marrocos","Cairo, Egito","Cidade do Cabo, África do Sul","Joanesburgo, África do Sul","Nairóbi, Quênia","Zanzibar, Tanzânia","Ilhas Maurício",
    // Ásia / Oceania
    "Tóquio, Japão","Quioto, Japão","Osaka, Japão","Pequim, China","Xangai, China","Hong Kong","Seul, Coreia do Sul","Bangkok, Tailândia","Phuket, Tailândia","Bali, Indonésia","Cingapura","Kuala Lumpur, Malásia","Maldivas","Nova Délhi, Índia","Mumbai, Índia","Sydney, Austrália","Melbourne, Austrália","Auckland, Nova Zelândia","Queenstown, Nova Zelândia","Taiti, Polinésia Francesa","Fiji"
  ];
  function build(){
    var sel = document.getElementById('f-pais');
    if(sel && !sel.dataset.filled){
      var keys = Object.keys(paises);
      for(var k=0;k<keys.length;k++){
        var og = document.createElement('optgroup');
        og.label = keys[k];
        var arr = paises[keys[k]].slice().sort(function(a,b){return a.localeCompare(b,'pt');});
        for(var i=0;i<arr.length;i++){
          var o = document.createElement('option');
          o.value = arr[i]; o.textContent = arr[i];
          og.appendChild(o);
        }
        sel.appendChild(og);
      }
      sel.dataset.filled = '1';
    }
    var dl = document.getElementById('cidades');
    if(dl && !dl.dataset.filled){
      var cs = cidades.slice().sort(function(a,b){return a.localeCompare(b,'pt');});
      for(var j=0;j<cs.length;j++){
        var op = document.createElement('option');
        op.value = cs[j];
        dl.appendChild(op);
      }
      dl.dataset.filled = '1';
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
