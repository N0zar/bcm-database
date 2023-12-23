function loadPage(pageContent) {
    let root = document.getElementById("root");
    root.innerHTML = pageContent;
}
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let route = link.getAttribute("name");
        fetch('../pages/' + route + '.html')
            .then(resp => resp.text())
            .then(data => loadPage(data));
    })
});

