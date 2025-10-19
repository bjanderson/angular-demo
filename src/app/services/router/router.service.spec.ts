import { callsRouterNavigateByUrl, router } from '../../../mocks/@angular/router/router.mock';
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

  describe('goToUrl', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named goToUrl', () => {
      expect(typeof service.goToUrl).toEqual('function');
    });

    callsRouterNavigateByUrl(() => {
      service.goToUrl('test');
    }, ['test']);
  });
});
