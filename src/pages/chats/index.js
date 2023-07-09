import Handlebars from "handlebars/runtime";
import render from "../../utils/render";
import template from './chats.hbs';

import templateButtonLink from '../../components/buttonLink/buttonLink.hbs';

import templateTopPanel from './components/list/topPanelList/topPanelList.hbs';
import templateChatsList from './components/list/chatsList/chatsList.hbs';
import templateCompanion from './components/list/companion/companion.hbs';

import templateDialogHeader from './components/dialog/dialogHeader/dialogHeader.hbs';
import templateDialogBody from './components/dialog/dialogBody/dialogBody.hbs';
import templateDialogFooter from './components/dialog/dialogFooter/dialogFooter.hbs';
import templateDialogEmpty from './components/dialog/dialogEmpty/dialogEmpty.hbs';
import templateMessage from './components/dialog/message/message.hbs';
import templateTimeSplitter from './components/dialog/timeSplitter/timeSplitter.hbs';


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
    const { isCertainUser } = params.queryParams;
    render(template({isCertainUser}));
}

export default renderPage;
