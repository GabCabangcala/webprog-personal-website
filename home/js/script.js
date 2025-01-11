 function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    modal.classList.remove('close-modal');
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    modal.classList.add('close-modal');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
