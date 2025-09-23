function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showDetails(propertyName) {
  document.getElementById('modalTitle').innerText = propertyName;
  document.getElementById('detailsModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('detailsModal').style.display = 'none';
}

function scheduleVisit(propertyName) {
  alert(`Agendamento de visita para: ${propertyName}. Nossa equipe entrará em contato.`);
}

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name') || 'Anônimo';
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    this.reset();
  });
});
