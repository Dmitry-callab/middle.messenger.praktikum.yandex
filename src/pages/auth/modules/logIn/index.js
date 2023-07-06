import Handlebars from "handlebars/runtime";
import templateInput from '../../../../components/input/input.hbs';
import templateButton from '../../../../components/button/button.hbs';

Handlebars.registerPartial('input', templateInput);
Handlebars.registerPartial('button', templateButton);
