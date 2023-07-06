import template from './somethingWentWrong.hbs';
import render from "../../utils/render";

function renderPage(params) {
    let { errorNumber } = params.queryParams;
    errorNumber = errorNumber ?? 404;
    let description = 'Не туда попали';

    if (errorNumber === '500') {
        description = 'Уже фиксим';
    }

    render(template({errorNumber, description}));
}

export default renderPage;
