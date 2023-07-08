import Handlebars from "handlebars/runtime";
import render from "../../utils/render";
import template from './chats.hbs';

import templateButtonLink from '../../components/buttonLink/buttonLink.hbs';

import templateTopPanel from './modules/list/topPanelList/topPanelList.hbs';
import templateChatsList from './modules/list/chatsList/chatsList.hbs';
import templateCompanion from './modules/list/companion/companion.hbs';

import templateDialogHeader from './modules/dialog/dialogHeader/dialogHeader.hbs';
import templateDialogBody from './modules/dialog/dialogBody/dialogBody.hbs';
import templateDialogFooter from './modules/dialog/dialogFooter/dialogFooter.hbs';
import templateDialogEmpty from './modules/dialog/dialogEmpty/dialogEmpty.hbs';
import templateMessage from './modules/dialog/message/message.hbs';
import templateTimeSplitter from './modules/dialog/timeSplitter/timeSplitter.hbs';


Handlebars.registerPartial('buttonLink', templateButtonLink);
Handlebars.registerPartial('topPanelList', templateTopPanel);
Handlebars.registerPartial('chatsList', templateChatsList);
Handlebars.registerPartial('companion', templateCompanion);

Handlebars.registerPartial('dialogHeader', templateDialogHeader);
Handlebars.registerPartial('dialogBody', templateDialogBody);
Handlebars.registerPartial('dialogFooter', templateDialogFooter);
Handlebars.registerPartial('dialogEmpty', templateDialogEmpty);
Handlebars.registerPartial('message', templateMessage);
Handlebars.registerPartial('timeSplitter', templateTimeSplitter);

function renderPage(params) {
    render(template());
}

export default renderPage;
