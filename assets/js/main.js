var page = 1;
var lastPage = 10;

function changePage(x) {
	if (x == "right") {
		if (page < 10) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page + 1) + ".html";
			page = page + 1;
		} else
		if (page == 10 || page > 10) {
			document.getElementById("page-frame").src = "assets/pages/page1.html";
			page = 1;
		}
	}
	if (x == "left") {
		if (page > 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page - 1) + ".html";
			page = page - 1;
		} else
		if (page == 1 || page < 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + lastPage + ".html";
			page = lastPage;
		}
	}
}