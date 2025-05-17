import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { user } from 'app/mock-api/common/user/data';
import { EnseignantService } from 'app/services/enseignant.service';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit
{
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;
    fromEnseignant: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private enseignantService: EnseignantService,
        private _router: Router
    )
    {
        const navigation = this._router.getCurrentNavigation();
        const fromLogin = navigation?.extras?.state?.['fromEnseignant'];

    if (fromLogin) {
      this.fromEnseignant=true
      console.log('Navigué depuis login');
    }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signUpForm = this._formBuilder.group({
                nom      : ['', Validators.required],
                prenom      : ['', Validators.required],
                nomAr      : ['', Validators.required],
                prenomAr      : ['', Validators.required],
                dateNaissance      : ['', Validators.required],
                adress      : ['', Validators.required],
                telephone      : ['', Validators.required],
                username     : ['', Validators.required],
                password  : ['', Validators.required],
                passwordC   : ['', Validators.required],
            },
            {
                validators: (group) => {
                  const pass = group.get('password')?.value;
                  const confirm = group.get('passwordC')?.value;
                  return pass === confirm ? null : { notSame: true };
                }
              }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void
    {
        console.log(this.signUpForm.value);
        console.log(this.signUpForm);
        // Do nothing if the form is invalid
        if ( this.signUpForm.invalid )
        {
            return;
        }

        // Disable the form
        //this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this.enseignantService.createEnseignant(this.signUpForm.value)
            .subscribe(
                (response) => {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/account/sign-in');
                },
                (response) => {

                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    //this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}
