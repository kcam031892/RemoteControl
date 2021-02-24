import Appliance from './appliances/IAppliance.js';
import ICommand from './commands/ICommand.js';
import RemoteControl from './RemoteControl.js';

export default class RemoteUI {
  el: HTMLDivElement;
  remoteControl: RemoteControl;
  constructor() {
    this.el = document.getElementById('remote-control')! as HTMLDivElement;
    this.remoteControl = new RemoteControl();
  }
  renderButton<T extends Appliance>(slot: number, onCommand: ICommand, offCommand: ICommand, base: T) {
    this.remoteControl.setCommand(slot, onCommand, offCommand);
    const div = document.createElement('div');
    div.classList.add('appliance-control');
    div.innerHTML = `
      <h3 class="appliance-control-name">${base.name}</h3>
      <button class="btn btn-on on-button" data-click-attr="${slot}">On</button>
      <button class="btn btn-off off-button" data-click-attr="${slot}">Off</button>
    `;
    this.el.appendChild(div);
    this.createApplianceElement(base);
  }
  createApplianceElement<T extends Appliance>(base: T) {
    const applianceEl = document.getElementById('appliances')! as HTMLDivElement;
    const img = document.createElement('img');
    img.src = base.defaultImage;
    const div = document.createElement('div');
    div.className = `appliance ${base.name}`;
    div.appendChild(img);
    applianceEl.appendChild(div);
  }
  configure() {
    this.handleOnButtons();
    this.handleOffButtons();
  }
  handleOnButtons() {
    const onButtons = document.querySelectorAll('.on-button');
    onButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const dataClickAttr = (e.target as HTMLButtonElement).getAttribute('data-click-attr')!;
        this.remoteControl.onPressed(+dataClickAttr);
      });
    });
  }
  handleOffButtons() {
    const onButtons = document.querySelectorAll('.off-button');
    onButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const dataClickAttr = (e.target as HTMLButtonElement).getAttribute('data-click-attr')!;
        this.remoteControl.offPressed(+dataClickAttr);
      });
    });
  }
}
