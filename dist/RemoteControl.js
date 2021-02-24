import NoCommand from './commands/NoCommand.js';
export default class RemoteControl {
    constructor() {
        this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
        this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
        this.undoCommand = [];
    }
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    onPressed(slot) {
        this.onCommands[slot].execute();
        this.undoCommand.push(this.onCommands[slot]);
    }
    offPressed(slot) {
        this.offCommands[slot].execute();
        this.undoCommand.push(this.offCommands[slot]);
    }
    undoPressed() {
        if (this.undoCommand.length > 0) {
            this.undoCommand[this.undoCommand.length - 1].undo();
            this.undoCommand = this.undoCommand.slice(0, -1);
        }
    }
}
