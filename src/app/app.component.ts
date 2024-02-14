import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { CustomCellComponent } from './custom-cell/custom-cell.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AgGridAngular, AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'ag-grid';
  rowData! : any;

  columnDefs: ColDef[] = [

    {
      headerName: 'Widget Name',
      cellRenderer: CustomCellComponent,
      cellRendererParams: {
        update: (field: {data: any, checked: boolean}) => {
          if(field.checked) {
            //
          } else {
           //
          }
        }
      },
    },
    {
      headerName: 'Widget Description',
      field: 'description'
    }
  ];

  ngOnInit(): void {
    this.rowData = [
      {
          "id": 3,
          "createdAt": 1706087460365,
          "updatedAt": 1706680744980,
          "widgetName": "widget name updated",
          "description": "optio updated",
      },
      {
          "id": 4,
          "createdAt": 1706087838524,
          "updatedAt": 1706680744969,
          "widgetName": "widget 2",
          "description": "option",
      },
      {
          "id": 5,
          "createdAt": 1706087993943,
          "updatedAt": 1706680744978,
          "widgetName": "widget 2",
          "description": "option",
      },
      {
          "id": 6,
          "createdAt": 1706159318843,
          "updatedAt": 1706159318843,
          "widgetName": "widget 3",
          "description": "option",
      },
      {
          "id": 7,
          "createdAt": 1706166359675,
          "updatedAt": 1706680744979,
          "widgetName": "widget 9 update",
      },
      {
          "id": 8,
          "createdAt": 1706698959887,
          "updatedAt": 1706700706643,
          "widgetName": "juwon test name update",
      },
      {
          "id": 9,
          "createdAt": 1706699624642,
          "updatedAt": 1706699624642,
          "widgetName": "juwonTest2",
      }
  ];
    }
  }





