import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormDemoComponent } from 'src/app/form-demo/form-demo.component';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export default class ProfilePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.form.profileForm.get('firstName')?.value;

    this.form.profileForm.patchValue({ firstName: 'ali' });

    throw new Error('Method not implemented.');
  }
  @ViewChild('form') form!: FormDemoComponent;
}
