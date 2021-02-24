import NoCommand from '@commands/NoCommand';
describe('The No Command Clas', () => {
  const noCommand = new NoCommand();
  it('it should return an instance of NoCommand', () => {
    expect(noCommand).toBeInstanceOf(NoCommand);
  });
});
