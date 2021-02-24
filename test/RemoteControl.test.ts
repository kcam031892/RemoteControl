import RemoteControl from '@src/RemoteControl';
import ICommand from '@commands/ICommand';
import LightOnCommand from '@commands/LightOnCommand';
import Light from '@appliances/Light';
import LightOffCommand from '@commands/LightOffCommand';
import NoCommand from '@commands/NoCommand';
describe('The remote control class', () => {
  const remoteControl = new RemoteControl();
  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);
  beforeAll(() => {
    remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
  });
  it('it should be return an instance of Remote Control', () => {
    expect(remoteControl).toBeInstanceOf(RemoteControl);
  });
  it('it should have a property of array of onCommand and offCommands', () => {
    expect(remoteControl).toHaveProperty('onCommands');
    expect(remoteControl).toHaveProperty('offCommands');
  });

  it('onCommands and offCommands should have length of 7', () => {
    expect(remoteControl.onCommands.length).toBe(7);
    expect(remoteControl.offCommands.length).toBe(7);
  });
  it('onCommands and offCommands should be instance of ICommand ', () => {
    expect(remoteControl.onCommands).toContainEqual(new NoCommand());
    expect(remoteControl.offCommands).toContainEqual(new NoCommand());
  });
  it('it should append the lightoncommand and lightoffcommand to array of commands on specific slot.  ', () => {
    expect(remoteControl.onCommands).toContainEqual(lightOnCommand);
    expect(remoteControl.offCommands).toContainEqual(lightOffCommand);
  });
  it('it should turn on the light on when press 0', () => {
    const lightSpy = jest.spyOn(light, 'on');
    const lightOnCommandSpy = jest.spyOn(lightOnCommand, 'execute');
    remoteControl.onPressed(0);
    expect(lightSpy).toBeCalled();
    expect(lightOnCommandSpy).toBeCalled();
    expect(lightOnCommand.light.light).toBeTruthy();
  });
  it('it should turn off the light on when press 0', () => {
    const lightSpy = jest.spyOn(light, 'off');
    const lightOffCommandSpy = jest.spyOn(lightOffCommand, 'execute');
    remoteControl.offPressed(0);
    expect(lightSpy).toBeCalled();
    expect(lightOffCommandSpy).toBeCalled();
    expect(lightOffCommand.light.light).toBeFalsy();
  });
});
