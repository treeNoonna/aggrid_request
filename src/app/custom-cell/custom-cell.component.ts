import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-custom-cell',
  standalone: true,
  imports: [ FormsModule, NzCheckboxModule],
  templateUrl: './custom-cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './custom-cell.component.css'
})
export class CustomCellComponent implements ICellRendererAngularComp {

  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);

  checked = false;
  params: any;

  agInit(params: any): void {
    this.params = params;
  }
  updateChecked(e: any) {
    this.params.update({data: this.params.data, checked: this.checked});
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return true;
  }
}
