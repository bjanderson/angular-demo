import { Injectable } from '@angular/core';
import { ErrorResponse } from '@bjanderson/utils';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastrService: ToastrService) {}

  error(message: string, title = 'Error'): void {
    this.toastrService.error(title, message, { extendedTimeOut: 0 });
  }

  errorResponse(errorResponse: ErrorResponse): void {
    this.error(errorResponse.errorMessage);
  }

  info(message: string, title = 'Info'): void {
    this.toastrService.info(title, message);
  }

  success(message: string, title = 'Success'): void {
    this.toastrService.success(title, message);
  }

  warn(message: string, title = 'Warning'): void {
    this.toastrService.warning(title, message, { extendedTimeOut: 0 });
  }
}
