export default class Light {
    constructor() {
        this.defaultImage = './../../images/light-off.png';
        this.name = 'Light';
    }
    on() {
        this.light = './../../images/light-on.png';
        this.handleChangImage();
    }
    off() {
        this.light = './../../images/light-off.png';
        this.handleChangImage();
    }
    handleChangImage() {
        const el = document.querySelector(`.appliance.${this.name}`);
        const img = el.querySelector('img');
        img.src = this.light;
    }
}
