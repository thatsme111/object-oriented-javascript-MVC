Class EmailModule extends FormModule implements OnClickListener {
	var id = "email";
	var defaultValue = "example@domain.com";
	function onclick(){
		console.log(SubmitModule.id);
	}
}