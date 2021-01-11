document.getElementById("add-row").addEventListener("click", function (event) {
	fName = document.getElementById("fName").value;
	lName = document.getElementById("lName").value;

	document.getElementById("fName").value = "";
	document.getElementById("lName").value = "";

	event.preventDefault();

	if (fName !== "" && lName !== "" && fName !== null && lName !== null) {
		var table = document.getElementById("table");
		// var tableContent = table.innerHTML;
		var tr = document.createElement("tr");
		tr.innerHTML = `<td> ${fName} </td><td> ${lName} </td>`;
		tr.addEventListener("click", function (even) {
			tr.remove();
		});
		table.appendChild(tr);
	}
});
