export default class Computer {
    constructor() {
        this.name = 'Computer';
        this.defaultImage = '../../images/computer-off.png';
    }
    on() {
        this.state = '../../images/computer-on.png';
        this.handleChangeImage();
    }
    off() {
        this.state = '../../images/computer-off.png';
        this.handleChangeImage();
    }
    handleChangeImage() {
        const el = document.querySelector(`.appliance.${this.name}`);
        const img = el.querySelector('img');
        img.src = this.state;
    }
}
