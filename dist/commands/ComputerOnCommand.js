export default class ComputerOnCommand {
    constructor(c) {
        this.computer = c;
    }
    execute() {
        this.computer.on();
    }
}
