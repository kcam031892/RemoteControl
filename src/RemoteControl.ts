import ICommand from './commands/ICommand.js';
import NoCommand from './commands/NoCommand.js';

export default class RemoteControl {
  onCommands: ICommand[];
  offCommands: ICommand[];

  constructor() {
    this.onCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
    this.offCommands = Array.from({ length: 7 }).map((_) => new NoCommand());
  }
  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
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
  onPressed(slot: number) {
    this.onCommands[slot].execute();
  }
  offPressed(slot: number) {
    this.offCommands[slot].execute();
  }
}
