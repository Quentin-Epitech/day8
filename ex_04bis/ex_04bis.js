function houdini(name) {
    const ele = document.querySelectorAll(`#${name}, .${name}`);
    ele.forEach(element => element.style.display = 'none');
}
document.addEventListener('DOMContentLoaded', () => {});
