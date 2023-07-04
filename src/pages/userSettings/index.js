import template from './template.hbs';
import render from "../../utils/render";

function renderPage(params) {
    render(template());
}

export default renderPage;
