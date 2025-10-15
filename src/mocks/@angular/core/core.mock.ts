jest.mock('@angular/core', () => ({
  ...jest.requireActual('@angular/core'),
  effect: () => undefined,
  inject: () => undefined,
  input: () => undefined,
  model: () => undefined,
  output: () => undefined,
  signal: () => undefined,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});
