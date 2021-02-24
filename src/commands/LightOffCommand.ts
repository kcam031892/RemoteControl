import Light from '../appliances/Light.js';
import ICommand from './ICommand.js';
export default class LightOffCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
  undo(): void {
    this.light.on();
  }
}
