// import { IDatabaseModel } from '@bjanderson/app-name-shared';
import { getObject, getString } from '@bjanderson/utils';
import { AlertService } from '../alert';
import { alertService } from '../alert/alert.service.mock';
import { ApiService } from '../api';
import {
  apiService,
  callsApiServiceDelete,
  callsApiServiceGet,
  callsApiServicePatch,
  callsApiServicePost,
} from '../api/api.service.mock';
import { LoadingService } from '../loading';
import {
  callsLoadingServiceHideLoading,
  callsLoadingServiceShowLoading,
  loadingService,
} from '../loading/loading.service.mock';
import { CrudService } from './crud.service';

const url = 'test/url';

class TestClass /* implements IDatabaseModel */ {
  public id: string;
  public get tableName() {
    return 'TEST';
  }
  public get tableColumnDefinitions() {
    return ['id TEXT NOT NULL PRIMARY KEY'];
  }
  constructor(o?: Partial<TestClass>) {
    const obj = getObject(o);
    this.id = getString(obj.id);
  }
}

class TestService extends CrudService<TestClass> {
  constructor(
    protected override alertService: AlertService,
    protected override apiService: ApiService,
    protected override loadingService: LoadingService
  ) {
    super(alertService, apiService, loadingService, url, TestClass);
  }
}

let service: any;
function init(): void {
  service = new TestService(alertService, apiService, loadingService);
}

describe('CrudService', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(service).toBeDefined();
    });
  });

  describe('getAll()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getAll', () => {
      expect(typeof service.getAll).toEqual('function');
    });

    callsLoadingServiceShowLoading(() => {
      service.getAll().subscribe();
    });

    callsApiServiceGet(() => {
      service.getAll().subscribe();
    }, [url]);

    callsLoadingServiceHideLoading(() => {
      service.getAll().subscribe();
    });
  });

  describe('get()', () => {
    const id = 'id1';

    beforeEach(() => {
      init();
    });

    it('has a function named get', () => {
      expect(typeof service.get).toEqual('function');
    });

    callsLoadingServiceShowLoading(() => {
      service.get(id).subscribe();
    });

    callsApiServiceGet(() => {
      service.get(id).subscribe();
    }, [`${url}/${id}`]);

    callsLoadingServiceHideLoading(() => {
      service.get(id).subscribe();
    });
  });

  describe('create()', () => {
    const testObj = new TestClass({ id: 'id1' });

    beforeEach(() => {
      init();
    });

    it('has a function named create', () => {
      expect(typeof service.create).toEqual('function');
    });

    callsLoadingServiceShowLoading(() => {
      service.create(testObj).subscribe();
    });

    callsApiServicePost(() => {
      service.create(testObj).subscribe();
    }, [url, testObj]);

    callsLoadingServiceHideLoading(() => {
      service.create(testObj).subscribe();
    });
  });

  describe('update()', () => {
    const testObj = new TestClass({ id: 'id1' });

    beforeEach(() => {
      init();
    });

    it('has a function named update', () => {
      expect(typeof service.update).toEqual('function');
    });

    callsLoadingServiceShowLoading(() => {
      service.update(testObj).subscribe();
    });

    callsApiServicePatch(() => {
      service.update(testObj).subscribe();
    }, [`${url}/${testObj.id}`, testObj]);

    callsLoadingServiceHideLoading(() => {
      service.update(testObj).subscribe();
    });
  });

  describe('delete()', () => {
    const testObj = new TestClass({ id: 'id1' });

    beforeEach(() => {
      init();
    });

    it('has a function named delete', () => {
      expect(typeof service.delete).toEqual('function');
    });

    callsLoadingServiceShowLoading(() => {
      service.delete(testObj).subscribe();
    });

    callsApiServiceDelete(() => {
      service.delete(testObj).subscribe();
    }, [`${url}/${testObj.id}`]);

    callsLoadingServiceHideLoading(() => {
      service.delete(testObj).subscribe();
    });
  });
});
