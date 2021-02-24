import Light from '@appliances/Light';

describe('Light class', () => {
  const light: Light = new Light();
  it('it should return instance of Light', () => {
    expect(light).toBeInstanceOf(Light);
  }),
    it('it should have a light property', () => {
      expect(light).toHaveProperty('light');
    }),
    it('light prop should return false when instantiate Light', () => {
      expect(light.light).toBe(false);
    }),
    it('should return true when trigger on method ', () => {
      const lightOnSpy = jest.spyOn(light, 'on');
      light.on();
      expect(lightOnSpy).toBeCalled();
      expect(light.light).toBe(true);
    });
  it('it should trigger false when trigger off method', () => {
    const lightOffSpy = jest.spyOn(light, 'off');
    light.off();
    expect(lightOffSpy).toBeCalled();
    expect(light.light).toBe(false);
  });
});
