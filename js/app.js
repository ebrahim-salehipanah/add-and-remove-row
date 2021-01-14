$(document).ready(() => {
	$("#add-row").click(function (event) {
		var left = $("#left").val();
		var right = $("#right").val();

		event.preventDefault(); //prevent refresh page

		if (left !== "" && right !== "" && left !== null && right !== null) {
			var table = $("#table");
			// var tableContent = table.innerHTML;
			var tr = document.createElement("tr");
			tr.innerHTML = `<td> ${left} </td><td> ${right} </td>`;
			tr.addEventListener("dblclick", function () {
				this.remove();
			});
			table.append(tr);
			$("#left").val("");
			$("#right").val("");
		}
	});
});
