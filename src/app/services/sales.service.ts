import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SalesService {
  options;
  domain = environment.domain;
  constructor(private http: Http) { }

  getVentas(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/ventas/' + f1 + '/' + f2, this.options).map(res => res.json());
  }
  getRecCxP(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/RecivosCxP/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getCostoVentas(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/costoVentas/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getGastosOperacion(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/gastosOperacion/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getUtilidadNeta(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/UtilidadNeta/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getCuentas_por_cobrar(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/Cuentas_por_cobrar/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getInventario(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/Inventario/' + f1 + '/' + f2, this.options).map(res => res.json());
  }

  getCuentas_por_pagar(f1, f2)
  {
    return this.http.get(this.domain + 'Sales/Cuentas_por_pagar/' + f1 + '/' + f2, this.options).map(res => res.json());
  }






}
