import { AlertService } from './alert.service';

const toastrService: any = {
  error: () => undefined,
  info: () => undefined,
  success: () => undefined,
  warning: () => undefined,
};

let service: any;
function init(): void {
  service = new AlertService(toastrService);
}

describe('AlertService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(service).toBeDefined();
    });
  });
});
