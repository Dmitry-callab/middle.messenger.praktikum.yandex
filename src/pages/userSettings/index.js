import Handlebars from "handlebars/runtime";
import template from './userSettings.hbs';
import render from "../../utils/render";

import templateButtonSave from '../../components/button/button.hbs';

import templateProfileInfo from './components/profileInfo/profileInfo.hbs';
import templateProfileInfoEdit from './components/profileInfoEdit/profileInfoEdit.hbs';
import templateProfilePasswordEdit from './components/profilePasswordEdit/profilePasswordEdit.hbs';

Handlebars.registerPartial('button', templateButtonSave);

Handlebars.registerPartial('profileInfo', templateProfileInfo);
Handlebars.registerPartial('profileInfoEdit', templateProfileInfoEdit);
Handlebars.registerPartial('profilePasswordEdit', templateProfilePasswordEdit);


function renderPage(params) {
    const { editMode } = params.queryParams;
    const templateData = {
        isProfileInfo: false,
        isEditProfileInfo: false,
        isEditProfilePassword: false,
    }
    switch(editMode) {
        case 'profile-info': {
            templateData.isEditProfileInfo = true;
            break;
        }
        case 'password': {
            templateData.isEditProfilePassword = true;
            break;
        }
        default: {
            templateData.isProfileInfo = true;
        }
    }
    render(template(templateData));
}

export default renderPage;
