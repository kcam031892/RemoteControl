import Light from '@src/appliances/Light';
import LightOffCommand from '@commands/LightOffCommand';

describe('The LightOffCommand Class', () => {
  const light = new Light();
  const lightOffCommand = new LightOffCommand(light);
  it('it should be an instance of LightOffCommand', () => {
    expect(lightOffCommand).toBeInstanceOf(LightOffCommand);
  });
  it('it should have a property of light', () => {
    expect(lightOffCommand).toHaveProperty('light');
  });
  it('light property should be instance of Light', () => {
    expect(lightOffCommand.light).toBeInstanceOf(Light);
  });
  it('it should called off from light when execute called', () => {
    const lightSpy = jest.spyOn(light, 'off');
    lightOffCommand.execute();
    expect(lightSpy).toBeCalled();
  });
  it('it should turned light to be false when execute called', () => {
    lightOffCommand.execute();
    expect(light.light).toBe(false);
  });
});
