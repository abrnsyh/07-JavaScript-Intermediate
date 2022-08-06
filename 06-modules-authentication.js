const passValidator = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/; // if true = pass isnt valid
const emailValidator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const validateLoginData = (email, password) => {
	if (emailValidator.test(email) === true) {
		if (passValidator.test(password) === true) {
			return "tolong masukan password sesuai ketentuan";
		}
		return "Welcome to The Jungle";
	} else {
		return "tolong masukan email yang valid";
	}
};

export default validateLoginData;
