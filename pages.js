
gotoPage(page1);

function gotoPage(pageNumber) {

  document.querySelectorAll('.pages').forEach((e) => e.hidden=true);
   //$('.pages').hide;

	pageNumber.hidden = false;
}
