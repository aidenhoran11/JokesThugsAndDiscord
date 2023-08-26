function toggleMenu() {
    const menu = document.querySelector('.fullscreen-menu');
    menu.classList.toggle('active');
    console.log(menu.classList);

    const header = document.querySelector('.header-content');
    console.log(header);
    header.classList.toggle('active');

    const main = document.querySelector('.page-content');
    main.classList.toggle('active');
    console.log(main.classList);

    const footer = document.querySelector(".footer");
    footer.classList.toggle("active");
    console.log(footer.classList);
}