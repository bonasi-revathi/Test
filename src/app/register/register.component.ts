import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  states = [ 'A.p', 'Telangana', 'Tamilnadu', 'Karnataka'];
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({

      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      phone:[ '', Validators.required],
      state:['', Validators.required]
    });
  }
get f() {
  return this.registerForm.controls;
}
  async onRegister(P) {
    console.log("rfvaluees",this.registerForm.value);
    const status: any = await this.registerService.createUser(this.registerForm.value);
    console.log(status);
    }

}
