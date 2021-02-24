import IAppliance from './IAppliance.js';

export default class Computer implements IAppliance {
  name: string = 'Computer';
  defaultImage: string = '../../images/computer-off.png';
  state!: string;
  on() {
    this.state = '../../images/computer-on.png';
    this.handleChangeImage();
  }
  off() {
    this.state = '../../images/computer-off.png';
    this.handleChangeImage();
  }
  handleChangeImage() {
    const el = document.querySelector(`.appliance.${this.name}`)! as HTMLDivElement;
    const img = el.querySelector('img')! as HTMLImageElement;
    img.src = this.state;
  }
}
