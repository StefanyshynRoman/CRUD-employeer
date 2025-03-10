import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'salary'];
  // displayedColumns = ['id', 'name', 'email', 'salary','edit','delete'];
  dataSource = new MatTableDataSource<Employee>();
  constructor(private  employeeService:EmployeeService) {
  }
  employees: Employee [] = []
  filteredEmployees:Employee[]=[];

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees().subscribe((data)=>
    {
      this.employees=data;
      this.dataSource = new MatTableDataSource<Employee>(data);
    })
  }

  searchEmployee(input:any){
    this.filteredEmployees=this.employees.filter(item=>item.name.toLowerCase().includes(input.toLowerCase())
      || item.email.toLowerCase().includes(input.toLowerCase())
      || item.salary.toString().includes(input));
    this.dataSource = new MatTableDataSource<Employee>(this.filteredEmployees);

  }
}

