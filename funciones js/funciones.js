$(document).ready(function(){
    $("#formulario").validate({
        rules:{
            lusuario:{required: true, minlength: 3, maxlength: 12},
            contraseña1:{required: true, minlength: 5, maxlength: 15},
        },
        messages:{
            lusuario:{
                required: "este campo es requerido",
                minlength: "nombre minimo de 3 caractres",
                maxlength: "nombre maximo de 12 caractres"
            },
            contraseña1:{
                required: "este campo es requerido",
                minlength: "minimo de 5 caracteres",
                maxlength: "maximo de 15 caractres"
            }
        }
    })
})