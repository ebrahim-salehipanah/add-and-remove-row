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

		$("tr").hover(
			function () {
				$(this).css({ "font-size": "22px", background: " #4e4e4e" });
				$(this).stop(true).animate({ height: "40px" }); //prevent play in mouse leave event
			},
			function () {
				$(this).css({ "font-size": "22px", background: "" }); //"" -> return to default style (style.css)
				$(this).animate({ height: "" }); //"" -> return to default style (style.css)
			}
		);
	});
});
