export default function mobileHierarchy() {
    const hierarchy = document.querySelector('.structure-hierarchy');

    if (!hierarchy) return;

    if (!window.matchMedia('(max-width: 640px)').matches) return;

    const root = hierarchy.querySelector('.structure-hierarchy__root');

   

    hierarchy.scrollLeft = root.offsetLeft - (document.querySelector('.page-main').offsetWidth - root.offsetWidth) / 2;
}
