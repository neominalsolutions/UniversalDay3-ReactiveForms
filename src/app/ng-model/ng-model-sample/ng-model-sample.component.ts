import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-sample',
  templateUrl: './ng-model-sample.component.html',
  styleUrls: ['./ng-model-sample.component.css'],
})
export class NgModelSampleComponent {
  firstname: string = '';
  valid: boolean = false;

  names: any[] = ['ali', 'ahmet', 'can'];
}
