import RemoteControl from './RemoteControl.js';
export default class RemoteUI {
    constructor() {
        this.el = document.getElementById('remote-control');
        this.remoteControl = new RemoteControl();
        this.createUndoElement();
    }
    renderButton(slot, onCommand, offCommand, base) {
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
    createApplianceElement(base) {
        const applianceEl = document.getElementById('appliances');
        const img = document.createElement('img');
        img.src = base.defaultImage;
        const div = document.createElement('div');
        div.className = `appliance ${base.name}`;
        div.appendChild(img);
        applianceEl.appendChild(div);
    }
    createUndoElement() {
        const div = document.createElement('div');
        div.classList.add('appliance-control');
        div.innerHTML = `
      <h3 class="appliance-control-name">UNDO</h3>
      <button class="btn btn-on undo-button">Undo</button>
    `;
        this.el.appendChild(div);
    }
    handleOnButtons() {
        const onButtons = document.querySelectorAll('.on-button');
        onButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const dataClickAttr = e.target.getAttribute('data-click-attr');
                this.remoteControl.onPressed(+dataClickAttr);
            });
        });
    }
    handleOffButtons() {
        const onButtons = document.querySelectorAll('.off-button');
        onButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const dataClickAttr = e.target.getAttribute('data-click-attr');
                this.remoteControl.offPressed(+dataClickAttr);
            });
        });
    }
    handleUndoButtons() {
        const undoButton = document.querySelector('.undo-button');
        undoButton.addEventListener('click', (e) => {
            this.remoteControl.undoPressed();
        });
    }
    configure() {
        this.handleOnButtons();
        this.handleOffButtons();
        this.handleUndoButtons();
    }
}
