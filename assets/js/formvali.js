function displayErrorMsg(field, spanmsg, icon, errmsg) {
    spanmsg.textContent = errmsg;
    spanmsg.style.color = "red";
    icon.src = "../assets/icons/cross.svg";
    icon.classList.remove("d-none");
    // field.focus();
    return true;
}

function displaySuccessMsg(field, spanmsg, icon, errmsg) {
    spanmsg.textContent = errmsg;
    spanmsg.style.color = "green";
    icon.src = "../assets/icons/tick.svg";
    icon.classList.remove("d-none");
    return true;
}

// Return the field to neutral state when no input
function clearMsg(spanmsg, icon) {
    spanmsg.textContent = "";
    icon.src = "";
    icon.classList.add("d-none");
}

function valEmail() {
    let emailVal = document.getElementById("emailtxt").value; // Retrieve value
    const emailField = document.getElementById("emailtxt"); // Refers to the actual textbox object
    const emailMsg = document.getElementById("emailmsg");
    const iEmail = document.getElementById("iemail");

    const PATTERN = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,7}$/;

    // Empty state
    if (emailVal.trim() === "") {
        clearMsg(emailMsg, iEmail);
        return false;
    }
    else if (!PATTERN.test(emailVal)) {
        displayErrorMsg(emailField, emailMsg, iEmail, "Invalid email!");
        return false;
    }
    else {
        displaySuccessMsg(emailField, emailMsg, iEmail, "Good to go!");
        return true;
    }
}
emailtxt.addEventListener("blur", valEmail);

function valPhone() {
    let phoneVal = document.getElementById("phonetxt").value; // Retrieve value
    const phoneField = document.getElementById("phonetxt"); // Refers to the actual textbox object
    const phoneMsg = document.getElementById("phonemsg");
    const iPhone = document.getElementById("iphone");

    const PATTERN = /^[0-9]{8}$/;

    // Empty state
    if (phoneVal.trim() === "") {
        clearMsg(phoneMsg, iPhone);
        return false;
    }
    else if (!PATTERN.test(phoneVal)) {
        displayErrorMsg(phoneField, phoneMsg, iPhone, "Invalid number!");
        return false;
    }
    else {
        displaySuccessMsg(phoneField, phoneMsg, iPhone, "Good to go!");
        return true;
    }
}
phonetxt.addEventListener("blur", valPhone);

function valFirstname() {
    let fnameVal = document.getElementById("fnametxt").value; // Retrieve value
    const fnameField = document.getElementById("fnametxt"); // Refers to the actual textbox object
    const fnameMsg = document.getElementById("fnamemsg");
    const iFname = document.getElementById("ifname");

    const PATTERN = /^[A-Za-z\s-]+$/;

    // Empty state
    if (fnameVal.trim() === "") {
        clearMsg(fnameMsg, iFname);
        return false;
    }
    else if (!PATTERN.test(fnameVal)) {
        displayErrorMsg(fnameField, fnameMsg, iFname, "Invalid name!");
        return false;
    }
    else {
        displaySuccessMsg(fnameField, fnameMsg, iFname, "Good to go!");
        return true;
    }
}
fnametxt.addEventListener("blur", valFirstname);

function valLastname() {
    let lnameVal = document.getElementById("lnametxt").value; // Retrieve value
    const lnameField = document.getElementById("lnametxt"); // Refers to the actual textbox object
    const lnameMsg = document.getElementById("lnamemsg");
    const iLname = document.getElementById("ilname");

    const PATTERN = /^[A-Za-z\s-]+$/;

    // Empty state
    if (lnameVal.trim() === "") {
        clearMsg(lnameMsg, iLname);
        return false;
    }
    else if (!PATTERN.test(lnameVal)) {
        displayErrorMsg(lnameField, lnameMsg, iLname, "Invalid name!");
        return false;
    }
    else {
        displaySuccessMsg(lnameField, lnameMsg, iLname, "Good to go!");
        return true;
    }
}
lnametxt.addEventListener("blur", valLastname);

function valSubject() {
    let subjectVal = document.getElementById("subjecttxt").value; // Retrieve value
    const subjectField = document.getElementById("subjecttxt"); // Refers to the actual textbox object
    const subjectMsg = document.getElementById("subjectmsg");
    const iSubject = document.getElementById("isubject");

    const PATTERN = /^[A-Za-z0-9\s.,!?'-]+$/;

    // Empty state
    if (subjectVal.trim() === "") {
        clearMsg(subjectMsg, iSubject);
        return false;
    }
    else if (subjectVal.trim().length > 50) {
        displayErrorMsg(subjectField, subjectMsg, iSubject, "Too long!");
        return false;
    }
    else if (!PATTERN.test(subjectVal)) {
        displayErrorMsg(subjectField, subjectMsg, iSubject, "Invalid subject!");
        return false;
    }
    else {
        displaySuccessMsg(subjectField, subjectMsg, iSubject, "Good to go!");
        return true;
    }
}
subjecttxt.addEventListener("blur", valSubject);

function valMessage() {
    let messageVal = document.getElementById("messagetxt").value; // Retrieve value
    const messageField = document.getElementById("messagetxt"); // Refers to the actual textbox object
    const messageMsg = document.getElementById("messagemsg");
    const iMessage = document.getElementById("imessage");

    const PATTERN = /^[A-Za-z0-9\s.,!?'"()-]+$/;

    // Empty state
    if (messageVal.trim() === "") {
        clearMsg(messageMsg, iMessage);
        return false;
    }
    else if (messageVal.trim().length < 20) {
        displayErrorMsg(messageField, messageMsg, iMessage, "Message too short!");
        return false;
    }
    else if (!PATTERN.test(messageVal)) {
        displayErrorMsg(messageField, messageMsg, iMessage, "Invalid characters!");
        return false;
    }
    else {
        displaySuccessMsg(messageField, messageMsg, iMessage, "Good to go!");
        return true;
    }
}
messagetxt.addEventListener("blur", valMessage);
