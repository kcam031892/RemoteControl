import ICommand from './commands/ICommand.js';
import NoCommand from './commands/NoCommand.js';

export default class RemoteControl {
  onCommands: ICommand[];
  offCommands: ICommand[];
  undoCommand: ICommand[];

  constructor() {
    this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    this.undoCommand = [];
  }
  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }
  onPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand.push(this.onCommands[slot]);
  }
  offPressed(slot: number) {
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
