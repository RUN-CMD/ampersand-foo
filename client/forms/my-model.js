var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');


module.exports = FormView.extend({
    fields: function () {
        return [new InputView({
                label: 'Id',
                name: 'id',
                value: this.model && this.model.id,
                required: false,
                placeholder: 'Id',
                parent: this
            })];
    }
});