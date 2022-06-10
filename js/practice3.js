const modalTriggerButton = document.querySelectorAll("[data-modal-target]");
const modal = document.querySelectorAll(".modal");
const modalCloseButton = document.querySelectorAll(".close");

modalTriggerButton.forEach(elem => {
    elem.addEventListener('click', event => toggleModal(event.currentTarget.getAttribute('data-modal-target')));
});
 

modalCloseButton.forEach(elem => {
    elem.addEventListener('click', event => toggleModal(event.currentTarget.closest('.modal').id));
});

modal.forEach(elem => {
    elem.addEventListener('click', event => {
        if(event.currentTarget===event.target) toggleModal(event.currentTarget.id);
    });
});


function toggleModal(modalId) {
    const modal = document.getElementById(modalId);



    if(getComputedStyle(modal).display==='flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex'
    }
}

