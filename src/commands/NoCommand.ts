import ICommand from './ICommand';

export default class NoCommand implements ICommand {
  execute(): void {}
}
