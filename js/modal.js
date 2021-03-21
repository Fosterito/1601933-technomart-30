const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

btnModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
