import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
 
    loginForm!: FormGroup; // Use non-null assertion operator
    passwordVisible: boolean = false;
  
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        // Form is valid, handle login logic here
        console.log('Login form submitted:', this.loginForm.value);
      } else {
        // Mark all form controls as touched to trigger validation messages
        this.markFormGroupTouched(this.loginForm);
      }
    }
  
    markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
  
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }
  }
  