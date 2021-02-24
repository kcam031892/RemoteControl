import ICommand from './commands/ICommand.js';
import NoCommand from './commands/NoCommand.js';

export default class RemoteControl {
  onCommands: ICommand[];
  offCommands: ICommand[];
  undoCommand: ICommand;

  constructor() {
    this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    this.undoCommand = new NoCommand();
  }
  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }
  onPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }
  offPressed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }
  undoPressed() {
    this.undoCommand.undo();
  }
}
