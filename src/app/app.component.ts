import { Component } from '@angular/core';
import { FilterOptionSetting } from './components/filter-option/filter-option.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stateManagement';

  public filterOptionSetting:FilterOptionSetting={reset:true,search:true,date:true}

  reset(){
    console.log("reset")
  }
  search(event:string){
    console.log("submit",event)
  }
  dateChange(event:object){
    console.log("submit",event)
  }
}
