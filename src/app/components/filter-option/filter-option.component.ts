import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.scss'],
})

export class FilterOptionComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() reset: EventEmitter<void> = new EventEmitter();
  @Output() date: EventEmitter<any> = new EventEmitter();
  @Input() setting:FilterOptionSetting= {
    search: true,
    date: true,
    reset: true,
  };
  public searchKeyword: string = '';
  public dateFrom: string = '';
  public dateTo: string = '';

  public onSearch(): void {
    this.search?.emit(this.searchKeyword);
  }

  public onDateChange(): void {
    this.date.emit({ from: this.dateFrom, to: this.dateTo });
  }

  public onReset(): void {
    this.searchKeyword = '';
    this.dateFrom = '';
    this.dateTo = '';
    this.reset?.emit();
  }
}

export interface FilterOptionSetting {
  search: boolean;
  date: boolean;
  reset: boolean;
}
