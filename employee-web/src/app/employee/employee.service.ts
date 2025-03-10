import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl:String="/api/v1/employees";
  fetchAllEmployees():Observable<Employee[]>{
    return this._httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(data:Employee){
    return this._httpClient.post<Employee>(`${this.baseUrl}`,data);
  }

  updateEmployee(data:Employee){
    return this._httpClient.put<Employee>(`${this.baseUrl}/${data.id}`,data);
  }

  deleteEmployee(id:Number){
    return this._httpClient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
