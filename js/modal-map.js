const btnMapModal = document.getElementById('btn-map-modal');
const modalMapModal = document.getElementById('modal-map');
const modalCloseMap = document.getElementById('modal-close-btn-map');


btnMapModal.addEventListener('click', () =>{
  modalMapModal.style.display = 'block';
});


modalCloseMap.addEventListener('click', () =>{
  modalMapModal.style.display = 'none';
});
