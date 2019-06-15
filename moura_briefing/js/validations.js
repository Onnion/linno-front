$(document).ready(function () {

    // Mascara telefone
    var maskBehavior = function (val) {
        return val.replace(/\D/g, "").length === 11
            ? "(00) 00000-0000"
            : "(00) 0000-00009";
    },
        options = {
            onKeyPress: function (val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
            }
        };

    $(".phone_mobile").mask(maskBehavior, options);

    $(".phone").mask("(00) 0000-0000");
    $(".cnpj").mask("00.000.000/0000-00", { reverse: true });
    $("#cep").mask("00000-000");
    // $(".money").mask("R$000.000.000.000.000,00", {reverse: true});
    $(".money").maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: true });
    $(".code_ax").keyup(function () {
        $(".code_ax").val(this.value.match(/[0-9]*/));
    });
});

const nameValidations = {
    validations: {
        required: true,
        minlength: 5
    },
    message: {
        required: 'Campo obrigatório',
        minlength: 'Este campo deve ter no mínimo 5 dígitos.'
    }
};

const fields = [
    { field: 'client_name', onlyRequired: false },
    { field: 'client_email', onlyRequired: true },
    { field: 'code_ax', onlyRequired: true },
    { field: 'company_name', onlyRequired: false },
    { field: 'distributor', onlyRequired: true },
    { field: 'email_responsible', onlyRequired: true },
    { field: 'registration_responsible', onlyRequired: false },
    { field: 'delivery_city', onlyRequired: false },
    { field: 'trading_name', onlyRequired: true },
    { field: 'delivery_neighborhood', onlyRequired: false },
    { field: 'delivery_radius', onlyRequired: true },
    { field: 'delivery_tax', onlyRequired: true },
    { field: 'has_delivery', onlyRequired: true },
    { field: 'has_logo', onlyRequired: true },
    { field: 'store_street', onlyRequired: false },
    { field: 'store_neighborhood', onlyRequired: true },
    { field: 'store_city', onlyRequired: true },
    { field: 'store_number', onlyRequired: true },
    { field: 'has_installation', onlyRequired: true },
    { field: 'installation_tax', onlyRequired: true },
    { field: 'campaign_duration', onlyRequired: true },
    { field: 'moura_percent', onlyRequired: true },
    { field: 'confirmation', onlyRequired: true },
    { field: 'terms', onlyRequired: true }
];

function generateMessages() {
    const messages = {};
    fields.forEach(function (field) {
        if (field.onlyRequired) {
            messages[field.field] = { required: nameValidations.message.required };
        } else {
            messages[field.field] = nameValidations.message;
        }
    });

    messages['client_cnpj'] = { minlength: 'Este campo deve ter 14 dígitos.', required: nameValidations.message.required };
    messages['store_cep'] = { minlength: 'Este campo deve ter 9 dígitos.', required: nameValidations.message.required };
    messages['phone_responsible'] = { minlength: 'Digite um número válido.', required: nameValidations.message.required };
    messages['client_whatsapp'] = { minlength: 'Digite um número válido.', required: nameValidations.message.required };
    messages['store_phone'] = { minlength: 'Digite um número válido.', required: nameValidations.message.required };
    messages['delivery_cost'] = { maxlength: 'Este campo deve ter no máximo 14 dígitos.' };
    messages['google_value'] = { maxlength: 'Este campo deve ter no máximo 14 dígitos.', required: nameValidations.message.required };
    messages['fileupload'] = {
        maxFileSize: 'Arquivo deve ter o tamanho máximo de 15kb',
        minFileSize: 'Arquivo deve ter o tamanho mínimo de 2kb',
        fileType: 'Arquivo no formato inválido'
    };

    return messages;
}

function generateValidations() {
    const validations = {};

    fields.forEach(function (field) {
        if (field.onlyRequired) {
            validations[field.field] = { required: nameValidations.validations.required };
        } else {
            validations[field.field] = nameValidations.validations;
        }
    });

    validations['client_cnpj'] = { minlength: 14, required: nameValidations.validations.required };
    validations['store_cep'] = { minlength: 9, required: nameValidations.validations.required };
    validations['phone_responsible'] = { minlength: 14, required: nameValidations.validations.required };
    validations['client_whatsapp'] = { minlength: 14, required: nameValidations.validations.required };
    validations['store_phone'] = { minlength: 14, required: nameValidations.validations.required };
    validations['delivery_cost'] = { maxlength: 14 };
    validations['google_value'] = { maxlength: 14, required: nameValidations.validations.required };
    validations['fileupload'] = {
        fileType: {
            types: ["ai", "eps", "psd", "jpg", "jpeg", "gif", "png", "pdf"]
        },
        maxFileSize: {
            "unit": "KB",
            "size": 15000
        },
        minFileSize: {
            "unit": "KB",
            "size": "2"
        }
    };

    return validations;
}

function generateDataEdit() {
    const fields = [
        'distributor',
        'registration_responsible',
        'email_responsible',
        'phone_responsible',
        'code_ax',
        'client_cnpj',
        'company_name',
        'trading_name',
        'client_name',
        'client_email',
        'client_whatsapp',
        'has_logo',
        'fileupload',
        'store_phone',
        'store_cep',
        'store_street',
        'store_number',
        'store_complement',
        'store_neighborhood',
        'store_city',
        'store_state',
        'week_open',
        'week_close',
        'saturday_open',
        'saturday_close',
        'sunday_open',
        'sunday_close',
        'holiday_open',
        'holiday_close',
        'has_delivery',
        'delivery_tax',
        'delivery_cost',
        'has_installation',
        'installation_tax',
        'installation_cost',
        'delivery_radius',
        'delivery_neighborhood',
        'delivery_city',
        'payment_money',
        'payment_check',
        'payment_debit',
        'payment_credit',
        'payment_installment',
        'battery_type_light',
        'battery_type_weight',
        'battery_motorcycle',
        'battery_boat',
        'battery_no_break',
        'battery_traction',
        'battery_stationary',
        'sell_oil',
        'change_oil',
        'campaign_duration',
        'google_value',
        'moura_percent',
        'confirmation',
        'terms'
    ];

    return fields;
}

function setDistributorEmail() {
    const distributor = $('#distributor').val();
    const distributorEmails = [
        { distributor: 'COMAL', email: 'hugo@mouraes.com.br' },
        { distributor: 'UNIÃO', email: 'isabela.celestino@mourasp.com.br' },
        { distributor: 'DISBATE', email: 'vendas.interior@disbate.com.br' },
        { distributor: 'DISBAC', email: 'joel.bremm@disbac.com.br' },
        { distributor: 'DIRPAL', email: 'alana.pimentel@dirpal.com.br' },
        { distributor: 'AVIC FILIAL JOINVILLE', email: 'e.albino@mourapr.com.br' },
        { distributor: 'BRASILIENSE', email: 'joefran @mouradf.com.br' },
        { distributor: 'FLUMINENSE', email: 'Thiago.pereira@mourario.com' },
        { distributor: 'TRIÂNGULO', email: 'rodrigo.cabral@mouratriangulo.com.br' },
        { distributor: 'FORTALEZA', email: 'victor@mourafortaleza.com.br' },
        { distributor: 'PARAÍBA', email: 'ricardo.b@mourapb.com.br' },
        { distributor: 'PALÁCIO', email: 'leonardo.franca@palaciodasbaterias.com.br' },
        { distributor: 'RODMASTER', email: 'lucas.oliveira@mourars.com.br' },
        { distributor: 'CAMPO GRANDE', email: 'jose.neto@grupomourams.com' },
        { distributor: 'CODIBA', email: 'ricardo.moura@mouranatal.com' },
        { distributor: 'BANDEIRANTES', email: 'altair@moura15.com' },
        { distributor: 'AUTOBATE', email: 'p.carmo@moura-ba.com' },
        { distributor: 'CATARINENSE', email: 'rhuan.carvalho@mourasc.com.br' }
    ];

    return distributorEmails.filter($distributor => distributor.toUpperCase().includes($distributor.distributor.toUpperCase()))[0]
}

function submit(form) {
    const distributor = setDistributorEmail();
    const formData = new FormData($("form#wrapped")[0]);
    formData.append('distributor_email', distributor ? distributor.email : '');

    $.ajax({
        // url: 'http://127.0.0.1:8000/api/lead/revenda-moura',
        url: 'https://api.jogga.com.br/api/lead/revenda-moura',
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        xhr: function () { // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) { // Avalia se tem suporte a propriedade upload
                myXhr.upload.addEventListener('progress', function () {
                    /* faz alguma coisa durante o progresso do upload */
                }, false);
            }
            return myXhr;
        },
        success: function (data) {
            window.location = 'obrigado.html'
        }
    })
        .always(function () {
            console.log('submited')
        });
}

$("form#wrapped").validate({
    focusInvalid: true,
    messages: generateMessages(),
    rules: generateValidations(),
    submitHandler: function (form) { submit(form); },
});
