import ICommand from './ICommand';

export default class NoCommand implements ICommand {
  undo(): void {}
  execute(): void {}
}
