import gsap from 'gsap';

export default function structureAccordions() {
    const accordions = Array.from(document.querySelectorAll('.structure-detail__accordion'));

    accordions.forEach(accordion => {
        const btn = accordion.querySelector('.structure-detail__accordion-btn');
        const content = accordion.querySelector('.structure-detail__accordion-content');

        const openAccordion = accordion => {
            accordion.classList.add('active');
            const content = accordion.querySelector('.structure-detail__accordion-content');
            gsap.to(content, {
                height: 'auto',
                duartion: 1
            });
        };
        const closeAccordion = accordion => {
            accordion.classList.remove('active');
            const content = accordion.querySelector('.structure-detail__accordion-content');
            gsap.to(content, {
                height: 0,
                duartion: 1
            });
        };

        btn.addEventListener('click', event => {
            event.preventDefault();
            if (accordion.classList.contains('active')) {
                closeAccordion(accordion)
            } else {
                openAccordion(accordion);
            }
        });
    });
}
