Class SubmitModule extends FormModule implements OnClickListener {
	var id = "submit";
	function SubmitModule(){
		console.log(EmailModule.value);
		// if(EmailModule.isValid())
		// 	console.log("correct input");
		// else
		// 	console.log("validation Error");
	}
	function onclick(){
		console.log(this.value);
	}
}