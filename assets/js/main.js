var page = 1;
const lastPage = 15;

document.getElementById("page-frame").src = "assets/pages/page" + page + ".html";
document.getElementById("pager").innerHTML = page + "/" + lastPage;

function changePage(x) {
	if (x == "right") {
		if (page == 15) alert("Slayt bitti.");
		if (page < lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page + 1) + ".html";
			page = page + 1;
			document.getElementById("pager").innerHTML = page + "/" + lastPage;
		} else
		if (page == lastPage || page > lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page1.html";
			page = 1;
			document.getElementById("pager").innerHTML = page + "/" + lastPage;
		}
	}
	if (x == "left") {
		if (page > 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + (page - 1) + ".html";
			page = page - 1;
			document.getElementById("pager").innerHTML = page + "/" + lastPage;
		} else
		if (page == 1 || page < 1) {
			document.getElementById("page-frame").src = "assets/pages/page" + lastPage + ".html";
			page = lastPage;
			document.getElementById("pager").innerHTML = page + "/" + lastPage;
		}
		if (page > lastPage) {
			document.getElementById("page-frame").src = "assets/pages/page" + lastPage + ".html";
			page = lastPage;
			document.getElementById("pager").innerHTML = page + "/" + lastPage;
		}
	}
}

function ControlKey(event) {
	if (event.keyCode == 37) {
		changePage("left");
	}
	else if (event.keyCode == 39) {
		changePage("right");
	}
}