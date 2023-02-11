function runTest(form, button)  {

	Ret = false;

	if (button.name == "1") Ret = testBox1(form);
    if (button.name == "2") Ret = testBox2(form);
	if (button.name == "3") Ret = testBox3(form);
	if (button.name == "4") Ret = testBox4(form);
	if (Ret)

		alert ("Campo correcto!");

}

function testBox1(form) {

	Ctrl = form.email;
	if (Ctrl.value == "" || Ctrl.value.indexOf ('@', 0) == -1) {
		validatePrompt (Ctrl, "E-mail")
		return (false);
	} else
		return (true);
}

function testBox2(form) {

	Ctrl = form.nombre;

	if (Ctrl.value.length < 3) {
		validatePrompt (Ctrl, "Nombre")
		return (false);
	} else
		return (true);
}

function testBox3(form) {
	Ctrl = form.celular;
	if (Ctrl.value.length < 7 ) {
		validatePrompt (Ctrl, "Celular")
		return (false);
	} else
		return (true);
}

function testBox4(form) {
	Ctrl = form.descripcion;
	if (Ctrl.value == "") {
		validatePrompt (Ctrl, "Descripción")
		return (false);
	} else
		return (true);
}

function runSubmit (form, button)  {
	if (!testBox1(form)) return;
	if (!testBox2(form)) return;
	if (!testBox3(form)) return;
	if (!testBox4(form)) return;
	alert ("Todos los están correctos.");
	
}

function validatePrompt (Ctrl, PromptStr) {
	alert (PromptStr)
	Ctrl.focus();
	return;
}