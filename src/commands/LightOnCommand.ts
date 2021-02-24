import ICommand from './ICommand.js';
import Light from './../appliances/Light.js';

export default class LightOnCommand implements ICommand {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
