import template from './template.hbs';
import render from "../../utils/render";

function renderPage(params) {
    let { errorNumber } = params.queryParams;
    errorNumber = errorNumber ?? 404;
    render(template({errorNumber}))
}

export default renderPage;
