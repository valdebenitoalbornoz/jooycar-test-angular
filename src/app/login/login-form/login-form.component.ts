import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  @Output() onlogged = new EventEmitter<boolean>();
  constructor(private _formBuilder: FormBuilder) {
    this.form = _formBuilder.group({
      email: [ null, Validators.required ],
      password: [ null, Validators.required ]
    });
  }

  ngOnInit(): void {
  }

  signIn() {
    if (this.form.invalid) {
      return;
    }
    this.onlogged.emit(true);
  }

}
