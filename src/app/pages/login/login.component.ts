import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //declaramos nuestro formulario como un FormGroup
  formLogin: FormGroup;

  //variable booleana que determinará cuando mostrar el mensaje de error
  //mostrarMensajeError: boolean = false;

  //variable booleana que determinará cuando se mostrará el spinner
  mostrarSpinner: boolean = false;

  //inyectamos en el contructor las dependencias necesarias (en este caso usamos FormBuilder y nuestro servicio LoginService)
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    //inicializamos nuestro formulario, creando con FormBuilder un nuevo group (con los campos EMAIL y PASSWORD)
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  //método para enviar nuestro formulario
  enviarForm(){
    //mostraremos el spinner mientras esta función se ejecuta
    this.mostrarSpinner = true;
    //llamamos al método "POST" de nuestro servicio (LoginService) y le enviamos como parámetro nuestro formulario
    this.loginService.post(this.formLogin.value).subscribe((data: any) => {
      //si todo está bien guardaremos el token recibido en el localStorage y redirigiremos a "home"
      this.mostrarSpinner = false;
      localStorage.setItem("token", JSON.stringify(data.token));
      this.router.navigate(["/home"]);
    },
    err => {
      //y si hay algún error, le notificaremos al usuario lo ocurrido con una alerta hecha con SweetAlert2
      //this.mostrarMensajeError = true;
      Swal.fire({
        title: "Error con la autenticación",
        html: "Email y/o contraseña incorrectos.<br>Por favor verifique sus datos y vuelvalo a intentar.",
        icon: "error",
        confirmButtonText: "Intentar nuevamente"
      });

      //devolveremos al valor inicial los campos del formulario
      this.formLogin.reset();

      //y también detendremos el spinner
      this.mostrarSpinner = false;
    })
  }

  //métodos get para los campos del formulario, para acceder más facilmente desde el template al hacer las validaciones
  get emailG(){
    return this.formLogin.get("email");
  }

  get passwordG(){
    return this.formLogin.get("password");
  }

}
