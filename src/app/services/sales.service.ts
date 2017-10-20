import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesService {
  options;
  domain = environment.domain;
  constructor(private http: Http) { }

  getAllSales(f1, f2) {
  return this.http.get(this.domain + 'Sales/costoVentas/' + f1 + '/' + f2, this.options).map(res => res.json());
}

}
