import Handlebars from "handlebars/runtime";
import render from "../../utils/render";
import routes from "../../constants/routes";
import templatePage from './auth.hbs';
import templateLogIn from './modules/logIn/logIn.hbs';
import templateSignIn from './modules/signIn/signIn.hbs';
import templateInput from '../../components/input/input.hbs';
import templateButton from '../../components/button/button.hbs';

Handlebars.registerPartial('input', templateInput);
Handlebars.registerPartial('button', templateButton);

function renderPage(params) {

    const { pathname } = params;
    switch (pathname) {
        case routes.home:
        case routes.logIn: {
            Handlebars.registerPartial('card', templateLogIn);
            render(templatePage());
            break;
        }
        case routes.signIn: {
            Handlebars.registerPartial('card', templateSignIn);
            render(templatePage());
            break;
        }
    }
}

export default renderPage;
