// toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
const joshiiieeeyyyElement = document.querySelector('.logo');

// Get references to the navigation links and sections
const navigationLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');

//learn more functionality
document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButton = document.getElementById('learnMoreButton');
    const expandedContent = document.getElementById('expandedContent');
    const closeButton = document.getElementById('closeButton');

    learnMoreButton.addEventListener('click', function () {
        expandedContent.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        expandedContent.style.display = 'none';
    });
});

// Function to update the active section and navbar
function updateActiveSection() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the section is in the viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            navigationLinks.forEach((link) => link.classList.remove('active'));
            navigationLinks[index].classList.add('active');

            // Add this part to change the navbar's background color
            navbar.style.backgroundColor = section.dataset.navcolor;
        }
    });
}

// Add scroll event listener to detect changes
window.addEventListener('scroll', updateActiveSection);

// Initial call to set the active section
updateActiveSection();

// ... (other code)



joshiiieeeyyyElement.addEventListener('click', function (event) {
    event.preventDefault();
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll, use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    // aniimation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
}