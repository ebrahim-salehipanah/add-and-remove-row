$(document).ready(() => {
	$("#add-row").click(function (event) {
		var fName = $("#fName").val();
		var lName = $("#lName").val();

		event.preventDefault(); //prevent refresh page

		if (fName !== "" && lName !== "" && fName !== null && lName !== null) {
			var table = $("#table");
			// var tableContent = table.innerHTML;
			var tr = document.createElement("tr");
			tr.innerHTML = `<td> ${fName} </td><td> ${lName} </td>`;
			tr.addEventListener("dblclick", function () {
				this.remove();
			});
			table.append(tr);
			$("#fName").val("");
			$("#lName").val("");
		}
	});
});
