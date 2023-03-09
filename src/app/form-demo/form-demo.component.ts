import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export enum OrderStatus {
  Submitted = 100,
  Completed = 200,
}

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css'],
})
export class FormDemoComponent implements OnInit {
  public get OrderStatus() {
    return OrderStatus;
  }

  updateProfile() {
    this.profileForm
      .get('address')
      ?.patchValue({ street: 'fr', city: 'tr', zip: 'zp' });

    this.profileForm.get('firstName')?.addValidators(Validators.email);
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.profileForm.get('firstName')?.valueChanges.subscribe((val: string) => {
      console.log('val', this.profileForm);
    });
  }

  // formModel = [
  //   {
  //     name: 'firstname',
  //     value: '',
  //     validations: ['required', 'min'],
  //     type: 'text',
  //   },
  //   {
  //     name: 'address',
  //     value: { name: 'street', type: 'text', validators: ['required'] },
  //   },
  // ];

  profileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    address: this.fb.group({
      street: [''],
      state: [''],
      city: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.group({
        name: ['asdsad'],
        content: [''],
      }),
    ]),
  });

  public get getAlias() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    console.log('aliases', this.getAlias);

    // this.getAlias.controls[0]

    this.getAlias.push(
      this.fb.group({
        name: [''],
        content: [''],
      })
    );
  }

  // eğer ts tarafında bir değer html üzerinden erişilmez ise bu durumda public getter ile arayüzden erişilebilir olur.
  public get Validator() {
    return Validators;
  }

  onSubmit() {
    console.log('value', this.profileForm.value);

    this.profileForm.get('firstName')?.hasValidator(Validators.required);

    this.profileForm.reset();
  }
}
