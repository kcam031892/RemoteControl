# Home Appliance Control

- a simple typescript application that will control appliances.

TODOS

- [x] install dependencies
  - [x] typescript
  - [x] @types/node
- [x] install jest as a test runner and assert library.
  - [x] jest
  - [x] ts-jest
  - [x] @types/jest
- [x] tsconfig
- [x] jestconfig
- [x] typescript module resolver.
- [x] make a dir for test.
- [x] make a directory for appliances commands /concrete-commands.
  - [x] create interface ICommand
    - [x] has a execute method.
  - [x] LightOnCommand
    - [x] implements ICommand
    - [x] has a prop of Light
    - [x] execute methods that will turn the light on.
  - [x] LightOfCommand
    - [x] implements ICommand
    - [x] has a prop of Light
    - [x] execute methods that will turn the light off.
- [x] make a directory for appliances /receivers.
  - [x] Lights
    - [x] has a prop of light
    - [x] has a on method.
      - [x] it should changed the state of the light to on.
    - [x] has a off method.
      - [x] it should changed the state of the light to off.
- [x] make an invoker

  - [x] Remote Class /invoker
    - [x] it should return a array of ICommands
    - [x] setCommand methods that will append concrete commands to array of ICommands.
    - [x] onPressed methods that will trigger on methods on the receiver.
    - [x] offPressed methods that will trigger off methods on the receiver.

- [ ] frontend
  - [x] create an index html file.
  - [x] create an Remote
    - [x] remote should be on the bottom and center of the screen.
    - [x] Turn on and Turn Off Buttons.
- [x] make an app.ts
  - [x] create a class UI.
  - [x] create a function that will render commands.
