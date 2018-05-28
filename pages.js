
gotoPage(page1);

/* This function is where it all happens */
function gotoPage(pageNumber) {

  document.querySelectorAll('.pages').forEach((e) => e.hidden=true);
   //$('.pages').hide;

	pageNumber.hidden = false;
}

function newFunc() {
    console.log('Does something...');
}
