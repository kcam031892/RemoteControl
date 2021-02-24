export default class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.off();
    }
    undo() {
        this.light.on();
    }
}
