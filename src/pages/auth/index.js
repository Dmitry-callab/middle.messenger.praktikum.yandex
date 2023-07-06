import Handlebars from "handlebars/runtime";

import render from "../../utils/render";
import routes from "../../constants/routes";
import templateLogIn from './modules/logIn/logIn.hbs';
import templatePage from './auth.hbs';
import templateSignIn from './modules/signIn/signIn.hbs';
import './modules/logIn/index';

function renderPage(params) {

    const { pathname } = params;
    switch (pathname) {
        case routes.logIn: {
            Handlebars.registerPartial('page', templateLogIn);
            render(templatePage());
            break;
        }
        case routes.signIn: {
            Handlebars.registerPartial('page', templateSignIn);
            render(templatePage());
            break;
        }
    }
}

export default renderPage;
