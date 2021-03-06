import Computer from './appliances/Computer.js';
import Light from './appliances/Light.js';
import ComputerOffCommand from './commands/ComputerOffCommand.js';
import ComputerOnCommand from './commands/ComputerOnCommand.js';
import LightOffCommand from './commands/LightOffCommand.js';
import LightOnCommand from './commands/LightOnCommand.js';
import RemoteUI from './RemoteUI.js';

const remoteUI = new RemoteUI();

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lighOffCommand = new LightOffCommand(light);

const computer = new Computer();
const computerOnCommand = new ComputerOnCommand(computer);
const computerOffCommand = new ComputerOffCommand(computer);

remoteUI.renderButton(0, lightOnCommand, lighOffCommand, light);
remoteUI.renderButton(1, computerOnCommand, computerOffCommand, computer);
remoteUI.configure();
