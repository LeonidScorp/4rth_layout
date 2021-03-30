$(function() {
    $(':submit').click(function(e) {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let emailReg = /^\S+@\S+\.\S+$/;
        let phoneReg = /^[0-9\-\+]{9,15}$/;
        let errors = 0;88

        if (!(name.search(nameReg))) {
            $(".error-name").text("");
        }

        if (!(phone.search(phoneReg))) {
            $(".error-phone").text("");
        }

        if (!(email.search(emailReg))) {
            $(".error-email").text("");
        }

        if ((name==null)||(name.search(nameReg))){
            $("#name").addClass("form-error");
            $("#name").attr('placeholder', "Поле обязательно для заполнения");
            errors++;
            if (name.search(nameReg)){
                $(".error-name").text("Неверное имя");
            }
        } else {
            $("#name").removeClass("form-error");
            $("#name").attr('placeholder', "");
        }

        if ((phone==null)||(phone.search(phoneReg))){
            $("#phone").addClass("form-error");
            $("#phone").attr('placeholder', "Поле обязательно для заполнения");
            errors++;
            if (phone.search(phoneReg)){
                $(".error-phone").text("Неверный номер");
            }
        } else {
            $("#phone").removeClass("form-error");
            $("#phone").attr('placeholder', "");
        }

        if ((email==null)||(email.search(emailReg))){
            $("#email").addClass("form-error");
            $("#email").attr('placeholder', "Поле обязательно для заполнения");
            errors++;
            if (email.search(emailReg)){
                $(".error-email").text("Неверный email");
            }
        } else {
            $("#email").removeClass("form-error");
            $("#email").attr('placeholder', "");
        }
        if (errors == 0) {
            return true;
        }

        if (errors > 0) {
            e.preventDefault();
        }
    })
})

// function validate() {
//     let name = document.getElementById('name').value;
//     let phone = document.getElementById('phone').value;
//     let email = document.getElementById('email').value;
//     let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
//     let emailReg = /^\S+@\S+\.\S+$/;
//     let phoneReg = /^[0-9\-\+]{9,15}$/;
//     let errors = 0;88

//     if (!(name.search(nameReg))) {
//         $(".error-name").text("");
//     }

//     if (!(phone.search(phoneReg))) {
//         $(".error-phone").text("");
//     }

//     if (!(email.search(emailReg))) {
//         $(".error-email").text("");
//     }

//     if ((name==null)||(name.search(nameReg))){
//         $("#name").addClass("form-error");
//         $("#name").attr('placeholder', "Поле обязательно для заполнения");
//         errors++;
//         if (name.search(nameReg)){
//             $(".error-name").text("Неверное имя");
//         }
//     } else {
//         $("#name").removeClass("form-error");
//     }

//     if ((phone==null)||(phone.search(phoneReg))){
//         $("#phone").addClass("form-error");
//         $("#phone").attr('placeholder', "Поле обязательно для заполнения");
//         errors++;
//         if (phone.search(phoneReg)){
//             $(".error-phone").text("Неверный номер");
//         }
//     } else {
//         $("#phone").removeClass("form-error");
//     }

//     if ((email==null)||(email.search(emailReg))){
//         $("#email").addClass("form-error");
//         $("#email").attr('placeholder', "Поле обязательно для заполнения");
//         errors++;
//         if (email.search(emailReg)){
//             $(".error-email").text("Неверный email");
//         }
//     } else {
//         $("#email").removeClass("form-error");
//     }
//     if (errors == 0) {
//         return true;
//     }

//     if (errors > 0) {
//         return false;
//     }
// }