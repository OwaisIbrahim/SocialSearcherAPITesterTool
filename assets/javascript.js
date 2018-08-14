

function showLoader() {
  var searchQuery = $('.query');
  if(searchQuery.val() == '') {
    $('#spinner').hidden();
  }
  else {
    $('#spinner').show();
  }

}

function update_block(type, cb_instance ) {
  var block = $('#'+type+'_block');
  // var tab = $('#'+type+'_tab');
  if(cb_instance.is(':checked')) {
    $(block).attr("hidden", false);
    // $(tab).removeClass("disabled");
  } else {
    $(block).attr("hidden", true);
    // $(tab).addClass("disabled");
  }
}
