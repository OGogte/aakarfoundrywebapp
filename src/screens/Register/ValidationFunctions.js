function isfirstName(val) {
    var reg = /^[a-zA-Z\s]+$/;
    if (reg.test(val) && val.trim().length > 0) return true;
    return false;
}

function isMail(val) {

    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.test(val)) return true;
    return false;
}

function isPassword(val) {
    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val) || val.length > 15) {
        return false;
    }
    return true;
}

function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
}

function departmentBox(val) {
    var regex = /^[a-zA-Z.-\s]*$/;
    if (regex.test(val) && val.trim().length > 0) return true;
    return false;

    return true;
}


module.exports = { isfirstName, isMail, isPassword, isRePassword, departmentBox };