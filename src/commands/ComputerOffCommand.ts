import Computer from './../appliances/Computer.js';
import ICommand from './ICommand.js';

export default class ComputerOffCommand implements ICommand {
  computer: Computer;
  constructor(c: Computer) {
    this.computer = c;
  }

  execute(): void {
    this.computer.off();
  }
  undo(): void {
    this.computer.on();
  }
}
