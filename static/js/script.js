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