const learnMoreButtons = document.querySelectorAll('.learn-more');
const additionalInfo = document.querySelector('.additional-info');
const closeButton = document.querySelector('.close-button');

learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const description = document.querySelectorAll('.description')[index].textContent;
        const infoContent = document.querySelector('.info-content');
        infoContent.innerHTML = `<h2>${description}</h2>`;
        additionalInfo.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    additionalInfo.style.display = 'none';
});
