function checkTheInput() {
    // DECLARE AND GET OUR INPUT FROM THE FORM(DOB AND GENDER) 
    var dob = document.forms["loginForm"]["dob"].value;
    var gender = document.forms["loginForm"]["gender"].value;
    var date = new Date(dob);
    // DECLARE OUR MALE ARRAY
    var male = [
        "Kwasi", 
        "Kwadwo", 
        "Kwabena", 
        "Kwaku", 
        "Yaw", 
        "Kofi",
        "Kwame"
    ];
    // DECLARE OUR FEMALE ARRAY
    var female = [
        "Akosua", 
        "Adwoa", 
        "Abenaa", 
        "Akua", 
        "Yaa", 
        "Afua",
        "Ama"
    ];
    // DECLARE VARIABLES FOR YEAR, MONTH, DAY AND CALCULATION
    var YY = date.getFullYear();
    var MM = date.getMonth();
    var DD = date.getDate();
    var CC = parseInt(YY.toString().slice(0,2));
    var calculation =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    // CONVERT CALCULATION VARIABLE IN INTEGER
    calculation = parseInt(calculation);

    // CHECK IF DATE OR BIRTH AND GENDER ARE EMPTY
    if (dob == "") {
        alert("Date of birth is required");
        document.loginForm.dob.focus();
        return false;
    } else if (gender == "") {
        alert("Gender is required");
        document.loginForm.gender.focus();
        return false;
    }
    // CHECK IF GENDER IS MALE OR FEMALE AND CHECK THE ARRAY INDEX TO RETURN THE NAME
    if(gender == 'male') {
        alert("Your Akan name is: "+male[calculation]);
    } else if (gender == 'female') {
        alert("Your Akan name is: "+female[calculation]);
    }

}