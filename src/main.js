import routes from "./constants/routes";
import renderPageAuth from "./pages/auth";
import renderPageChats from "./pages/chats";
import renderPageUserSettings from "./pages/userSettings";
import renderPageSomethingWentWrong from "./pages/somethingWentWrong";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    const { location } = window;
    const { pathname } = location;
    console.log('location', location);

    const params = { pathname, queryParams: {} };

    switch (pathname) {
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
            params.queryParams.errorNumber = new URLSearchParams(location.search).get('errorNumber');
            renderPageSomethingWentWrong(params);
            break;
        }
        default: {
            params.queryParams.errorNumber = 404;
            renderPageSomethingWentWrong(params);
        }
    }

})
