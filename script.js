document.addEventListener('DOMContentLoaded', function () {

  // Formulário de contato
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    try {
      const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert(`Obrigado, ${formData.get('name') || 'Anônimo'}! Sua mensagem foi enviada com sucesso.`);
        this.reset();
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    }
  });

// Botões Agendar Visita
const visitButtons = document.querySelectorAll('.btn-visit');

visitButtons.forEach(button => {
  button.addEventListener('click', function () {
    const propertyCard = this.closest('.property-card');
    const propertyName = propertyCard.querySelector('h3').innerText;

    const phone = "5527997885798";
    const message = `Olá! Quero agendar uma visita para o imóvel: ${propertyName}`;
    const encodedMessage = encodeURIComponent(message);

    // Detecta se é mobile
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    // Define a URL correta
    const url = isMobile
      ? `https://wa.me/${phone}?text=${encodedMessage}`          // Mobile abre app
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`; // Desktop abre web

    window.open(url, "_blank");
  });
});



  // Carrossel de imagens
  document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let index = 0;
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');

    function showImage(i) {
      images.forEach(img => img.style.display = 'none');
      images[i].style.display = 'block';
    }

    showImage(index);

    prev.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });

    // Troca automática a cada 3 segundos
    setInterval(() => {
      index = (index + 1) % images.length;
      showImage(index);
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let index = 0;

    images[index].classList.add('active');

    function showImage(i) {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
    }

    prev.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });

    // Autoplay (opcional)
    setInterval(() => {
      index = (index + 1) % images.length;
      showImage(index);
    }, 5000); // muda a cada 5 segundos
  });
});

function showDetails(property) {
  const modal = document.getElementById("detailsModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");

  let detailsText = "";

  switch (property) {
    case "Casa na Praia Costa Dourada - Bahia | Área de 4 Lotes":
      detailsText = `
      <p><strong>Descrição</strong></p>
      <p><strong>Casa na Praia Costa Dourada - Bahia | Área de 4 Lotes</strong></p>
      <p>Descubra o paraíso em plena Costa Dourada, Bahia, com esta exclusiva casa à venda que abrange uma área de 4 lotes. Ideal para quem busca conforto, espaço e contato direto com a natureza, essa propriedade é perfeita para famílias que desejam desfrutar do melhor que a vida praiana oferece.</p>
      
      <p><strong>Destaques do Imóvel:</strong></p>
      <ul>
        <li><strong>Localização Privilegiada:</strong> Situada na deslumbrante região da Costa Dourada, conhecida por suas praias paradisíacas e clima acolhedor.</li>
        <li><strong>Ampla Área de 4 Lotes:</strong> Espaço generoso que possibilita diversas construções e áreas de lazer, garantindo privacidade e liberdade para personalizar seu sonho.</li>
        <li><strong>Ambiente Tranquilo e Seguro:</strong> Ideal para quem valoriza sossego e qualidade de vida, longe do agito, mas com fácil acesso às principais vias.</li>
      </ul>
      
      <p><strong>Por que escolher esta casa na Costa Dourada?</strong></p>
      <p>Aqui, você estará investindo em um imóvel com potencial para valorização, em uma região turística em constante crescimento. Além disso, a proximidade com praias de águas cristalinas e natureza exuberante torna este local perfeito para momentos inesquecíveis com família e amigos.</p>
      
      <p>Não perca a oportunidade de viver ou investir em um dos lugares mais desejados da Bahia. Entre em contato e saiba mais sobre essa incrível casa na Praia Costa Dourada com área de 4 lotes!</p>
      
      <p><em>Viva o sonho da casa própria à beira-mar com espaço e conforto que só a Costa Dourada pode oferecer!</em></p>
    `;
      document.getElementById("modalDescription").innerHTML = detailsText;
      document.getElementById("detailsModal").style.display = "block";
      break;

    case "Chácara em Mantena - ES | Área de 1644m²":
      detailsText = `
      <p><strong>Descrição</strong></p>
      <p><strong>Chácara em Mantena - ES | Área de 1644m²</strong></p>
      <p>Descubra a tranquilidade do campo com esta chácara à venda em Mantena, oferecendo um amplo terreno de 1644m². Ideal para quem busca espaço, conforto e contato direto com a natureza, esta propriedade é perfeita para famílias ou investidores que desejam qualidade de vida e liberdade.</p>
      
      <p><strong>Destaques do Imóvel:</strong></p>
      <ul>
        <li><strong>Localização Privilegiada:</strong> Apenas 1km do centro de Mantena, garantindo praticidade no dia a dia sem abrir mão do sossego do campo.</li>
        <li><strong>Terreno Amplo de 1644m²:</strong> Espaço generoso perfeito para construir sua casa dos sonhos, áreas de lazer ou para investimento, proporcionando liberdade e privacidade.</li>
        <li><strong>Acesso Fácil:</strong> Saída pela rua Cricaré, com estrada simples e bem conservada, facilitando a chegada à propriedade.</li>
        <li><strong>Ambiente Tranquilo:</strong> Ideal para quem busca fugir da agitação urbana e aproveitar momentos relaxantes em meio à natureza.</li>
      </ul>
      
      <p><strong>Por que escolher esta chácara em Mantena?</strong></p>
      <p>Investir nesta chácara é garantir um imóvel com grande potencial, próximo da cidade, mas cercado pela natureza. Perfeito para criar memórias inesquecíveis com a família e amigos, aproveitando o melhor do campo sem abrir mão da comodidade.</p>
      
      <p>Não perca essa oportunidade de viver ou investir em Mantena. Entre em contato e conheça seu novo endereço em um terreno amplo e cheio de possibilidades!</p>
      
      <p><em>Viva a tranquilidade do campo com espaço e conforto que só esta chácara pode oferecer!</em></p>
    `;
      document.getElementById("modalDescription").innerHTML = detailsText;
      document.getElementById("detailsModal").style.display = "block";
      break;


    case "Terreno Rural em Mantena - ES | Área de 5,3 hectares":
      detailsText = `
      <p><strong>Descrição</strong></p>
      <p><strong>Terreno Rural em Mantena - ES | Área de 5,3 hectares</strong></p>
      <p>Descubra um verdadeiro refúgio de paz com este terreno rural à venda em Mantena, oferecendo 5,3 hectares de área. Ideal para quem busca qualidade de vida, contato com a natureza e oportunidades de lazer ou investimento.</p>
      
      <p><strong>Destaques do Imóvel:</strong></p>
      <ul>
        <li><strong>Localização Privilegiada:</strong> Apenas 3 km do centro de Mantena, garantindo fácil acesso à cidade sem abrir mão da tranquilidade do campo.</li>
        <li><strong>Ampla Extensão de 5,3 Hectares:</strong> Espaço generoso perfeito para lazer, eventos ao ar livre, agricultura ou construção de áreas de descanso.</li>
        <li><strong>Ambiente Tranquilo:</strong> Ideal para finais de semana relaxantes com a família, churrascos ao ar livre e contato direto com o verde.</li>
        <li><strong>Potencial de Renda e Valorização:</strong> Excelente oportunidade para investimento, podendo gerar renda com aluguel para eventos, turismo rural ou atividades agrícolas.</li>
      </ul>
      
      <p><strong>Por que escolher este terreno rural em Mantena?</strong></p>
      <p>Investir neste terreno é garantir um espaço único para lazer, descanso e diversão da família, próximo à cidade, mas cercado pela natureza. Além disso, possui grande potencial de valorização e oportunidades de renda extra.</p>
      
      <p>Não perca essa chance de transformar seu tempo livre em momentos inesquecíveis ou de gerar uma renda consistente. Entre em contato e conheça seu pedaço de paz próximo a Mantena!</p>
      
      <p><em>Viva a tranquilidade do campo com liberdade, espaço e oportunidades que só este terreno rural pode oferecer!</em></p>
    `;
      document.getElementById("modalDescription").innerHTML = detailsText;
      document.getElementById("detailsModal").style.display = "block";
      break;

    case "Área de 481m² na Rua São Francisco":
      detailsText = `
      <p><strong>Descrição</strong></p>
      <p><strong>Área Comercial em Mantena - ES | 481m²</strong></p>
      <p>Excelente oportunidade para investir ou montar seu ponto comercial em uma das regiões que mais cresce e valoriza na cidade. Ideal para quem busca visibilidade, segurança e retorno garantido.</p>
      
      <p><strong>Destaques do Imóvel:</strong></p>
      <ul>
        <li><strong>Localização Estratégica:</strong> Situada na Rua São Francisco, em área de grande movimento e fácil acesso.</li>
        <li><strong>Ótima Visibilidade:</strong> Perfeito para seu negócio ser visto e reconhecido por clientes em potencial.</li>
        <li><strong>Região em Crescimento:</strong> Área em constante valorização, garantindo investimento seguro e promissor.</li>
      </ul>
      
      <p><strong>Por que escolher esta área comercial?</strong></p>
      <p>Investir nesta área é garantir um espaço estratégico para seu negócio, com grande potencial de crescimento e retorno financeiro. Perfeito para quem busca segurança e oportunidade em Mantena.</p>
      
      <p>Não perca a chance de garantir seu ponto comercial em uma localização privilegiada. Entre em contato e saiba mais!</p>
      
      <p><em>Invista com segurança e garanta visibilidade e retorno para seu negócio!</em></p>
    `;
      document.getElementById("modalDescription").innerHTML = detailsText;
      document.getElementById("detailsModal").style.display = "block";
      break;

    default:
      detailsText = "Mais informações em breve.";
  }

  title.textContent = property;
  description.textContent = detailsText;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}



// Política de Privacidade
function openPrivacyPolicy() {
  document.getElementById("privacyModal").style.display = "flex";
}

function closePrivacyModal() {
  document.getElementById("privacyModal").style.display = "none";
}
