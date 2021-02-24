export default class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
    undo() {
        this.light.off();
    }
}
