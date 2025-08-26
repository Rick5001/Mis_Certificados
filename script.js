const certCards = document.querySelectorAll('.cert-card img');
const lightbox = document.getElementById('lightbox');
const pdfViewer = document.getElementById('pdf-viewer');
const downloadBtn = document.getElementById('download-btn');
const closeBtn = document.getElementById('close-btn');

certCards.forEach(card => {
  card.addEventListener('click', () => {
    const pdfPath = card.getAttribute('data-pdf');
    pdfViewer.src = pdfPath;
    downloadBtn.href = pdfPath;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  pdfViewer.src = ''; // limpiar iframe
});
