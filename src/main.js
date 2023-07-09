import routes from "./constants/routes";
import renderPageAuth from "./pages/auth";
import renderPageChats from "./pages/chats";
import renderPageUserSettings from "./pages/userSettings";
import renderPageSomethingWentWrong from "./pages/somethingWentWrong";

document.addEventListener('DOMContentLoaded', () => {

    const { location } = window;
    const { pathname } = location;

    const params = { pathname, queryParams: {} };

    switch (pathname) {
        case routes.home:
        case routes.logIn:
        case routes.signIn:{
            renderPageAuth(params);
            break;
        }
        case routes.chats: {
            const urlParams = new URLSearchParams(location.search);
            params.queryParams.isCertainUser = urlParams.get('certain-user') ?? false;
            renderPageChats(params);
            break;
        }
        case routes.userSettings: {
            const urlParams = new URLSearchParams(location.search);
            params.queryParams.editMode = urlParams.get('edit-mode');
            renderPageUserSettings(params);
            break;
        }
        case routes.somethingWentWrong: {
            const urlParams = new URLSearchParams(location.search);
            params.queryParams.errorNumber = urlParams.get('error');
            renderPageSomethingWentWrong(params);
            break;
        }
        default: {
            params.queryParams.errorNumber = 404;
            renderPageSomethingWentWrong(params);
        }
    }

})
