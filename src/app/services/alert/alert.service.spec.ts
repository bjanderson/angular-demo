import { ErrorResponse } from '@bjanderson/utils';
import {
  callsToastrServiceError,
  callsToastrServiceInfo,
  callsToastrServiceSuccess,
  callsToastrServiceWarning,
  toastrService,
} from '../../../mocks/ngx-toastr/toastr.service.mock';
import { AlertService } from './alert.service';

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

  describe('error', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named error', () => {
      expect(typeof service.error).toEqual('function');
    });

    callsToastrServiceError(() => {
      const message = 'test message';
      const title = 'test title';
      service.error(message, title);
    }, ['test title', 'test message', { extendedTimeOut: 0 }]);
  });

  describe('errorResponse', () => {
    beforeEach(() => {
      init();
      service.error = () => undefined;
    });

    it('has a function named errorResponse', () => {
      expect(typeof service.errorResponse).toEqual('function');
    });

    it('calls error', () => {
      const spy = spyOn(service, 'error').and.callThrough();
      const errorMessage = 'test errorMessage';
      const errorResponse = new ErrorResponse({ errorMessage });
      service.errorResponse(errorResponse);
      expect(spy).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe('info', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named info', () => {
      expect(typeof service.info).toEqual('function');
    });

    callsToastrServiceInfo(() => {
      const message = 'test message';
      const title = 'test title';
      service.info(message, title);
    }, ['test title', 'test message']);
  });

  describe('success', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named success', () => {
      expect(typeof service.success).toEqual('function');
    });

    callsToastrServiceSuccess(() => {
      const message = 'test message';
      const title = 'test title';
      service.success(message, title);
    }, ['test title', 'test message']);
  });

  describe('warn', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named warn', () => {
      expect(typeof service.warn).toEqual('function');
    });

    callsToastrServiceWarning(() => {
      const message = 'test message';
      const title = 'test title';
      service.warn(message, title);
    }, ['test title', 'test message', { extendedTimeOut: 0 }]);
  });
});
