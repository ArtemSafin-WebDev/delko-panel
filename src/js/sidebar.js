import './resizeSensor';
import StickySidebar from 'sticky-sidebar';


export default function sidebar() {
    new StickySidebar('.page-sidebar', {
        topSpacing: 0,
        bottomSpacing: 0,
        containerSelector: '.page-content',
        innerWrapperSelector: '.page-sidebar-inner',
        resizeSensor: true,
        // minWidth: 641
    });
}
