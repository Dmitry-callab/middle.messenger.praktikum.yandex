import template from './userSettings.hbs';
import render from "../../utils/render";

function renderPage(params) {
    render(template());
}

export default renderPage;
