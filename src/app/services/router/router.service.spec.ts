import { RouterService } from './router.service';

const alertService: any = {};

const apiService: any = {}

let service: any;
function init(): void {
  service = new RouterService(alertService, apiService);
}

describe('RouterService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    })

    it('should construct', () => {
      expect(service).toBeDefined();
    });
  });
});
