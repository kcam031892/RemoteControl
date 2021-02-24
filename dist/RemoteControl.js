import NoCommand from './commands/NoCommand.js';
export default class RemoteControl {
    constructor() {
        this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
        this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
        this.undoCommand = new NoCommand();
    }
    setCommand(slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    onPressed(slot) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }
    offPressed(slot) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }
    undoPressed() {
        this.undoCommand.undo();
    }
}
