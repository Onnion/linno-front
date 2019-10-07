function alowFields() {
    $("#logradouro").attr('disabled', false);
    $("#bairro").attr('disabled', false);
    $("#cidade").attr('disabled', false);
    $("#uf").attr('disabled', false);
    $("#complemento").attr('disabled', false);
    $("#numero").attr('disabled', false);
}


$("#cep").focusout(function () {
    var cep = $(this).val();
    if (cep.length >= 8) {
        $.ajax({
            url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/unicode/',
            dataType: 'json',
            success: function (res) {
                $("#logradouro").val(res.logradouro);
                $("#bairro").val(res.bairro);
                $("#cidade").val(res.localidade);
                $("#uf").val(res.uf);
                $("#numero").focus();
            }
        })
            .always(function (res) {
                alowFields();
            });
    }
});
