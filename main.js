if (window.screen.width < 768){
    function openMenu(){
        let menu = document.querySelector('.headerList');
        menuArria = menu.getAttribute('aria-hidden');
        if (menuArria == 'true') {
            menu.setAttribute('aria-hidden', 'false');
        } else {
            menu.setAttribute('aria-hidden', 'true');
        }
    }

    function showSubmenu(){
        let submenu = document.querySelector('.submenu');
        submenuArria = submenu.getAttribute('aria-hidden');

        let icon = document.querySelector('.fa-arrow-down');

        if (submenuArria == 'true') {
            submenu.setAttribute('aria-hidden', 'false');
            icon.style.transform = 'rotate(180deg)';
        } else {
            submenu.setAttribute('aria-hidden', 'true');
            icon.style.transform = 'rotate(0deg)';
        }   
    }
} else {
    let menuItems = document.querySelectorAll('.headerList li a');
    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            document.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
        })
    })
}