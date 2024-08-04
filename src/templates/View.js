export class View {
    constructor(id) {
        this.element = document.getElementById(id);
    }

    render(value) {
        this.element.innerHTML = value;
    }
}