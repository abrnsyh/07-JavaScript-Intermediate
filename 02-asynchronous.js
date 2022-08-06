const isR18Plus = (age) => {
	return new Promise((resolve, reject) => {
		if (age < 18) {
			reject("anda sudah dewasa");
		}
		resolve("anda masih dibawah umur");
	});
};
const printR18Plus = async () => {
	const underAge = await isR18Plus(10).catch((err) => console.log(err));
	const properAge = await isR18Plus(19).catch((err) => console.log(err));

	console.log(underAge);
	console.log(properAge);
};

printR18Plus();
