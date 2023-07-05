import template from './chats.hbs';
import render from "../../utils/render";

function renderPage(params) {
    render(template());
}

export default renderPage;
