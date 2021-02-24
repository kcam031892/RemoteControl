import NoCommand from './commands/NoCommand.js';
export default class RemoteControl {
    constructor() {
        this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
        this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    }
    setCommand(slot, onCommand, offCommand) {
        console.log(onCommand);
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    renderButton() {
        Array.from({ length: 7 }).forEach((_, i) => {
            if (!(this.onCommands[i] instanceof NoCommand) && !(this.offCommands[i] instanceof NoCommand)) {
            }
        });
    }
    onPressed(slot) {
        this.onCommands[slot].execute();
    }
    offPressed(slot) {
        this.offCommands[slot].execute();
    }
}
