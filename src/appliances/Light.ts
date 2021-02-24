import IAppliance from './IAppliance.js';

export default class Light implements IAppliance {
  defaultImage: string = './../../images/light-off.png';
  name: string = 'Light';
  light!: string;
  el!: HTMLDivElement;

  on() {
    this.light = './../../images/light-on.png';
    this.handleChangImage();
  }
  off() {
    this.light = './../../images/light-off.png';
    this.handleChangImage();
  }
  handleChangImage() {
    const el = document.querySelector(`.appliance.${this.name}`)! as HTMLDivElement;
    const img = el.querySelector('img')! as HTMLImageElement;
    img.src = this.light;
  }
}
