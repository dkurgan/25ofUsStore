export const formErrors = data => {
    console.log(data)
    let errors = {};
    if (data.firstName.length < 3)
        errors.fName = 1;
    if (data.secondName.length < 3)
        errors.sName = 1;
    if (data.mobile.length < 11)
        errors.mob = 1;    
    if (data.email.length < 5)
        errors.email = 1;
    if (data.postIndex.length !== 6)
        errors.pIndex = 1;
    if (data.postAdress.length < 10)
        errors.pAdress = 1;
    return errors
}