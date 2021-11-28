const section = document.getElementById('homePage');
section.remove();
section.querySelector('#getStartedLink').addEventListener('click', (event) => {
    event.preventDefault();
    ctx.goTo(ctx.pages.dashboard);
});
let ctx = null;

export function showHomePage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showView(section);
}