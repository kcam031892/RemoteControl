import Computer from './../appliances/Computer.js';
import ICommand from './ICommand.js';

export default class ComputerOnCommand implements ICommand {
  computer: Computer;
  constructor(c: Computer) {
    this.computer = c;
  }
  execute(): void {
    this.computer.on();
  }
  undo(): void {
    this.computer.off();
  }
}
