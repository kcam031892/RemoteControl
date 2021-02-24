export default class ComputerOffCommand {
    constructor(c) {
        this.computer = c;
    }
    execute() {
        this.computer.off();
    }
}
