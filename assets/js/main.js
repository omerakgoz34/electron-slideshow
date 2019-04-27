var page = 1;
const lastPage = 5;

document.getElementById("page-frame").src = "assets/pages/page" + page + ".html";
document.getElementById("pager").innerHTML = "P:" + page;

function changePage(x) {
	if (x == "right") {
		if (page < lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page + 1) + ".html";
			page = page + 1;
			document.getElementById("pager").innerHTML = "P:" + page;
		} else
		if (page == lastPage || page > lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page1.html";
			page = 1;
			document.getElementById("pager").innerHTML = "P:" + page;
		}
	}
	if (x == "left") {
		if (page > 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page - 1) + ".html";
			page = page - 1;
			document.getElementById("pager").innerHTML = "P:" + page;
		} else
		if (page == 1 || page < 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + lastPage + ".html";
			page = lastPage;
			document.getElementById("pager").innerHTML = "P:" + page;
		}
		if (page > lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page" + lastPage + ".html";
			page = lastPage;
			document.getElementById("pager").innerHTML = "P:" + page;
		}
	}
}