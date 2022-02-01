const menuBurger = document.querySelector('.menu-burger');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});

const tab = document.querySelectorAll('[data-tabs-tab]')
const tabBodys = document.querySelectorAll('[data-tabs-body]')

for (let btn of tab) {
    btn.addEventListener('click', () => {
        tab.forEach(item => { item.classList.remove('active') })
        btn.classList.add('active')
        tabBodys.forEach(content => {
            if (content.dataset.tabsBody === btn.dataset.tabsTab) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}