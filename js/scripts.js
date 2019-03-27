$(document).ready(function(){
  $('#gate-keeper').modal({backdrop: 'static', keyboard: false});
    $("#submit-age").click(function(){
      if (parseInt($("#age").val()) > 18)
      {
        $("#gate-keeper").modal('hide');
      }
      else {
        $("#gate-keeper").effect("shake");
      }
    });
});
