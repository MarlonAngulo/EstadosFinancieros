import {Injectable} from '@angular/core';


@Injectable()
export class AppGlobals
{
  //-------------------------------------------------variables periodo 1------------------------------------------------------
  //Estado de resultados
  public f1:String='2015-12-08';
  public f2:String='2016-08-20';

  public fI2:String='2016-01-01';
  public fF2:String='2016-12-31';

  public ventas1: Number = 0;
  public costoVentas1: Number = 0;
  public utilidadBruta1: Number = 0;//resta de ventas menos costo de ventas
  public gastosOperacion1: Number = 0;
  public utAntesIntEimp1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public gastosfinancieros1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public utilidadNeta1: Number = 0;
//Balance general
  public Efectivo1: Number = 2000;//valor  que no existe en la base de datos por eso queda estatico
  public cuentasPorCobrar1: Number = 0;
  public inventarios1: Number = 0;
  public totalActivoCirculante1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public activoFijoNeto1: Number = 8000;//valor  que no existe en la base de datos por eso queda estatico
  public totalActivo1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public pasivoCirculante1: Number = 0;//el pasivo circulante son las cuentas por pagar
  public cuentasPorPagar1: Number = 0;
  public pasivoAlargoPlazo1: Number = 7500;//valor  que no existe en la base de datos por eso queda estatico
  public totalPasivo1: Number = 10000;//valor  que no existe en la base de datos por eso queda estatico
  public Patrimonio1: Number = 2500;//valor  que no existe en la base de datos por eso queda estatico
  public totalPasivomasPatri1: Number = 12500;//valor  que no existe en la base de datos por eso queda estatico
  public VentasCredito1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public ComprasCredito1: Number = 0;//valor  que no existe en la base de datos por eso queda estatico
  public RecCxP: Number = 0; //Recivo de cuentas por pagar de acuerdo a fechas

//--------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------variables periodo 2------------------------------------------------------
//Estado de resultados
public ventas2: Number = 0;
public costoVentas2: Number = 0;
public utilidadBruta2: Number = 0;
public gastosOperacion2: Number = 0;
public utAntesIntEimp2: Number = 2500;
public gastosfinancieros2: Number = 0;
public utilidadNeta2: Number = 0;
//Balance general
public Efectivo2: Number = 2100;
public cuentasPorCobrar2: Number = 0;
public inventarios2: Number = 0;
public totalActivoCirculante2: Number = 4400;
public activoFijoNeto2: Number = 8500;
public totalActivo2: Number = 12900;
public pasivoCirculante2: Number = 0;//el pasivo circulante son las cuentas por pagar
public cuentasPorPagar2: Number = 0;
public pasivoAlargoPlazo2: Number = 7800;
public totalPasivo2: Number = 10400;
public Patrimonio2: Number = 2300;
public totalPasivomasPatri2: Number = 12700;
public VentasCredito2: Number = 0;
public ComprasCredito2: Number = 0;
public RecCxP2: Number = 0; //Recivo de cuentas por pagar de acuerdo a fechas
//--------------------------------------------------------------------------------------------------------------------

public divPref: Number = 0;
public capPref: Number = 0;
public numeroAcciones:Number = 1000;


}
