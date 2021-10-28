function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const company = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber')
    const companyInfo = document.getElementById('companyInfo');
    const submit = document.getElementById('submit');
    const valid = document.getElementById('valid');
    
    company.checked = false;
    company.addEventListener('change', function () {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    submit.addEventListener('click', function (e) {
        e.preventDefault();

        const isCompany = company.checked ? checkCompanyNum() : true;
        const isUserName = checkUsername();
        const isEmail = checkEmail();
        const isPassword = checkPassword();
        const isConfirmPassword = checkConfirmPassword();

        if (isUserName && isEmail && isPassword && isConfirmPassword && isCompany) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });

    function checkUsername() {
        const pattern = /^[a-zA-Z0-9]*$/;
        if (username.value.length < 3 || username.value.length > 20 || !pattern.test(username.value)) {
            username.style.borderColor = 'red';
            return false;
        } else {
            username.style.borderColor = '';
            return true;
        }
    }

    function checkEmail() {
        const pattern = /^.*@.*\..*$/;
        if (!pattern.test(email.value)) {
            email.style.borderColor = 'red';
            return false;
        } else {
            email.style.borderColor = '';
            return true;
        }
    }

    function checkPassword() {
        const pattern = /^\w+$/;
        if (password.value.length < 5 || password.value.length > 15 || !pattern.test(password.value) || confirmPassword.value != password.value) {
            password.style.borderColor = 'red';
            return false;
        } else {
            password.style.borderColor = '';
            return true;
        }
    }

    function checkConfirmPassword() {
        const pattern = /^\w+$/;
        if (confirmPassword.value.length < 5 || confirmPassword.value.length > 15 || !pattern.test(confirmPassword.value) || confirmPassword.value != password.value) {
            confirmPassword.style.borderColor = 'red';
            return false;
        } else {
            confirmPassword.style.borderColor = '';
            return true;
        }
    }

    function checkCompanyNum() {
        if (Number.isNaN(companyNumber.value) || Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
            companyNumber.style.borderColor = 'red';
            return false;
        } else {
            companyNumber.style.borderColor = '';
            return true;
        }
    }
}