import {Model} from './Model';
import {View} from './View';

export class Presenter {
    constructor(initialState, elementId) {
        this.model = new Model(initialState);
        this.view = new View(elementId);

        this.view.render(`<div>${this.model.getValue()}</div>`);

        this.model.subscribe(() => {
            const newValue = this.model.getValue();
            this.view.render(`<div>${newValue}</div>`);
        });
    }
}
