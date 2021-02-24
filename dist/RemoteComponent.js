import RemoteControl from './RemoteControl';
export default class RemoteComponent extends RemoteControl {
    constructor() {
        super();
        this.el = document.getElementById('remote-control');
    }
    addNewAppliance() { }
}
