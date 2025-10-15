import { router } from '../../../mocks/@angular/router/router.mock';
import { RouterService } from './router.service';

let service: any;
function init(): void {
  service = new RouterService(router);
}

describe('RouterService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(service).toBeDefined();
    });
  });
});
