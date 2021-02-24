import ICommand from '@commands/ICommand';
import LightOnCommand from '@commands/LightOnCommand';
import Light from '@src/appliances/Light';

describe('The Light On Command Class', () => {
  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  it('it should return a instance of ICommand', () => {
    expect(lightOnCommand).toBeInstanceOf(LightOnCommand);
  });
  it('it should have a prop of light', () => {
    expect(lightOnCommand).toHaveProperty('light');
  });
  it('light prop should be instance of Light', () => {
    expect(lightOnCommand.light).toBeInstanceOf(Light);
  });
  it('it should called on from light when execute called', () => {
    const lightSpy = jest.spyOn(light, 'on');
    lightOnCommand.execute();
    expect(lightSpy).toBeCalled();
  });
  it('it should turn light to be true when  execute called', () => {
    lightOnCommand.execute();
    expect(light.light).toBe(true);
  });
});
