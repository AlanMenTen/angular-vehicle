import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getDetailVehicle (){
    const vehicle1: Vehicle = {
      id: 1,
      vin: '1234556',
      placa:'NZF4000',
      modelo: '1998',
      status: 'ACTIVE'
    }
    return vehicle1;
  }
}
