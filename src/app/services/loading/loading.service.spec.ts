import { LoadingService } from './loading.service';

let service: any;
function init(): void {
  service = new LoadingService();
}

describe('LoadingService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(service).toBeDefined();
    });
  });

  describe('hideLoading', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named hideLoading', () => {
      expect(typeof service.hideLoading).toEqual('function');
    });

    it('sets isLoading to false', () => {
      service.isLoading.set(true);
      service.hideLoading();
      expect(service.isLoading()).toEqual(false);
    });
  });

  describe('showLoading', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named showLoading', () => {
      expect(typeof service.showLoading).toEqual('function');
    });

    it('sets isLoading to true', () => {
      service.isLoading.set(false);
      service.showLoading();
      expect(service.isLoading()).toEqual(true);
    });
  });
});
