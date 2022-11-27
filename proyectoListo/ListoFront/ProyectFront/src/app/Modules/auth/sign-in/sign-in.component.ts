import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  loading!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {

    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  login() {
    /*
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    const rememberMe = this.loginForm.get('rememberMe')?.value;

    this.loading = true;
    this.authenticationService
      .login(email.toLowerCase(), password)
      .subscribe(
        data => {
          if (rememberMe) {
            localStorage.setItem('savedUserEmail', email);
          } else {
            localStorage.removeItem('savedUserEmail');
          }
          this.router.navigate(['/']);
        },
        error => {
          this.notificationService.openSnackBar(error.error);
          this.loading = false;
        }
      );
      */
  }

  resetPassword() {
    this.router.navigate(['/auth/password-reset-request']);
  }

}
