function render(html, querySelector = '#app') {
    const rootElement = document.querySelector(querySelector);
    rootElement.innerHTML = html;
}

export default render;
