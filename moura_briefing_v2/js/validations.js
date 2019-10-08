$(document).ready(function () {

    // Mascara telefone
    var maskBehavior = function (val) {
        return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "00000000009";
    },
        options = {
            onKeyPress: function (val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
            }
        };

    $(".phone_mobile").mask(maskBehavior, options);
    $(".phone_mobile.whatsapp").mask("(00) 00000-0000");
    $(".phone").mask("(00) 0000-0000");
    $(".cnpj").mask("00.000.000/0000-00", {
        reverse: true
    });
    $("#cep").mask("00000-000");
    $(".money").maskMoney({
        prefix: 'R$ ',
        allowNegative: true,
        thousands: '.',
        decimal: ',',
        affixesStay: true
    });
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
    {
        field: 'average_volume',
        onlyRequired: true
    },
    {
        field: 'monthly_volume',
        onlyRequired: true
    },
    {
        field: 'client_name',
        onlyRequired: false
    },
    {
        field: 'client_email',
        onlyRequired: true
    },
    {
        field: 'code_ax',
        onlyRequired: true
    },
    {
        field: 'company_name',
        onlyRequired: false
    },
    {
        field: 'distributor',
        onlyRequired: true
    },
    {
        field: 'email_responsible',
        onlyRequired: true
    },
    {
        field: 'registration_responsible',
        onlyRequired: false
    },
    {
        field: 'delivery_city',
        onlyRequired: false
    },
    {
        field: 'trading_name',
        onlyRequired: true
    },
    {
        field: 'delivery_neighborhood',
        onlyRequired: false
    },
    {
        field: 'delivery_radius',
        onlyRequired: true
    },
    {
        field: 'delivery_tax',
        onlyRequired: true
    },
    {
        field: 'has_delivery',
        onlyRequired: true
    },
    {
        field: 'has_logo',
        onlyRequired: true
    },
    {
        field: 'store_street',
        onlyRequired: false
    },
    {
        field: 'store_neighborhood',
        onlyRequired: true
    },
    {
        field: 'store_city',
        onlyRequired: true
    },
    {
        field: 'store_number',
        onlyRequired: true
    },
    {
        field: 'has_installation',
        onlyRequired: true
    },
    {
        field: 'installation_tax',
        onlyRequired: true
    },
    {
        field: 'campaign_duration',
        onlyRequired: true
    },
    {
        field: 'moura_percent',
        onlyRequired: true
    },
    {
        field: 'confirmation',
        onlyRequired: true
    },
    {
        field: 'terms',
        onlyRequired: true
    }
];

function generateMessages() {
    const messages = {};
    fields.forEach(function (field) {
        if (field.onlyRequired) {
            messages[field.field] = {
                required: nameValidations.message.required
            };
        } else {
            messages[field.field] = nameValidations.message;
        }
    });

    messages['client_cnpj'] = {
        minlength: 'Este campo deve ter 14 dígitos.',
        required: nameValidations.message.required
    };
    messages['store_cep'] = {
        minlength: 'Este campo deve ter 9 dígitos.',
        required: nameValidations.message.required
    };
    messages['phone_responsible'] = {
        minlength: 'Digite um número válido.',
        required: nameValidations.message.required
    };
    messages['client_whatsapp'] = {
        minlength: 'Digite um número válido.',
        required: nameValidations.message.required
    };
    messages['store_phone'] = {
        minlength: 'Digite um número válido.',
        required: nameValidations.message.required
    };
    messages['delivery_cost'] = {
        maxlength: 'Este campo deve ter no máximo 14 dígitos.'
    };
    messages['google_budget'] = {
        maxlength: 'Este campo deve ter no máximo 14 dígitos.',
        required: nameValidations.message.required
    };
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
            validations[field.field] = {
                required: nameValidations.validations.required
            };
        } else {
            validations[field.field] = nameValidations.validations;
        }
    });

    validations['client_cnpj'] = {
        minlength: 14,
        required: nameValidations.validations.required
    };
    validations['store_cep'] = {
        minlength: 9,
        required: nameValidations.validations.required
    };
    validations['phone_responsible'] = {
        minlength: 10,
        required: nameValidations.validations.required
    };
    validations['client_whatsapp'] = {
        minlength: 14,
        required: nameValidations.validations.required
    };
    validations['store_phone'] = {
        minlength: 14,
        required: nameValidations.validations.required
    };
    validations['delivery_cost'] = {
        maxlength: 14
    };
    validations['google_budget'] = {
        maxlength: 14,
        required: nameValidations.validations.required
    };
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

$('#week_open').change(function () {
    const week_open = $('#week_open').val() === '24h00';
    $('#week_close').attr('disabled', week_open);
})

$('#saturday_open').change(function () {
    const saturday_open = $('#saturday_open').val() === '24h00';
    $('#saturday_close').attr('disabled', saturday_open);
})

$('#sunday_open').change(function () {
    const sunday_open = $('#sunday_open').val() === '24h00';
    $('#sunday_close').attr('disabled', sunday_open);
})

$('#holyday_open').change(function () {
    const holyday_open = $('#holyday_open').val() === '24h00';
    $('#holyday_close').attr('disabled', holyday_open);
})

function generateDataEdit() {
    const fields = {
        distributor: 'Nome do Distribuidor',
        registration_responsible: 'Nome completo do responsável pelo cadastro da revenda',
        email_responsible: 'E-mail do responsável pelo cadastro',
        phone_responsible: 'Telefone fixo ou celular do responsável pelo cadastro',
        code_ax: 'Código Ax',
        client_cnpj: 'CNPJ',
        company_name: 'Razão social',
        trading_name: 'Nome fantasia',
        client_name: 'Nome do responsável pela revenda',
        client_email: 'E-mail do responsável pela revenda',
        client_whatsapp: 'Whatsapp do responsável pela revenda',
        store_phone: 'Telefone',
        store_cep: 'CEP',
        store_street: 'Logradouro',
        store_number: 'Número',
        store_complement: 'Complemento',
        store_neighborhood: 'Bairro',
        store_city: 'Cidade',
        store_state: 'Estado',
        week_open: 'Seg a Sex - Abre às',
        week_close: 'Seg a Sex - Fecha às',
        saturday_open: 'Sábado - Abre à',
        saturday_close: 'Sábado - Fecha às',
        sunday_open: 'Domingo - Abre às',
        sunday_close: 'Domigo - Fecha às',
        holiday_open: 'Feriado - Abre às',
        holiday_close: 'Feriado - Fecha às',
        has_delivery: 'Faz a entrega',
        delivery_tax: 'A entrega é grátis',
        delivery_cost: 'Valor da Entrega',
        has_installation: 'Realiza a Instalação da Bateria',
        installation_tax: 'A instalação é grátis',
        installation_cost: 'Valor de Instalação',
        delivery_radius: 'Raio da entrega',
        delivery_neighborhood: 'Entrega em quais bairros',
        delivery_city: 'Entrega em quais cidades',
        payment_money: 'Dinheiro',
        payment_check: 'Cheque',
        payment_debit: 'Débito',
        payment_credit: 'Crédito',
        payment_installment: 'Parcelamentos',
        battery_type_light: 'Automotiva Leve',
        battery_type_weight: 'Automotiva Pesada',
        battery_motorcycle: 'Moto',
        battery_boat: 'Boat',
        average_volume: 'Volume de baterias médio mensal comprado pelo cliente',
        monthly_volume: 'Volume mensal acordado para participação no PDM',
        battery_no_break: 'No-break',
        battery_traction: 'Tracionária',
        battery_stationary: 'Estacionária',
        sell_oil: 'Vende Óleo Lubel',
        change_oil: 'Faz Troca de Óleo',
        google_key_words: 'Palavras Chave',
        campaign_duration: 'Duração da Campanha',
        google_budget: 'Valor investido por mês no Google',
        moura_percent: 'Percentual da mídia google a ser pago mensalmente pela Moura e Distribuidor',
    };

    const exclude = ['confirmation', 'terms', 'has_logo', 'fileupload', 'website'];

    return {
        fields,
        exclude
    }
}

function generateFieldsHtmlModalConfirm() {
    const form = $("form#wrapped").serializeArray();
    const { fields, exclude } = generateDataEdit();

    let fieldsText = '';
    form.forEach(function (field) {
        if (!exclude.includes(field.name)) {
            fieldsText = fieldsText.concat(`<p style="text-align: left; margin-bottom: 25px"><strong>${fields[field.name]}:</strong> <span>${field.value}</span></p>`);
        }
    });

    return fieldsText;
}

function generateHtmlModalConfirm() {
    return `
        <div style="height: 250px; max-height: 250px; overflow: auto;">
            ${generateFieldsHtmlModalConfirm()}
        </div>
    `;
}

function modalConfirm(form) {
    Swal.fire({
        title: 'Antes de continuar, confirme todas as informações preenchidas',
        html: generateHtmlModalConfirm(),
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'cancelar',
    }).then((confirm) => {
        if (confirm.value) {
            $("#loader_form").fadeIn();
            submit();
        }
    });
}

function print(formData) {
    let form = '';

    for (let pair of formData.entries()) {
        form = form + JSON.stringify(`${pair[0]}: ${pair[1]}   -   `)
    }

    try {
        fetch('../print.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form: form
            }),
        })
            .then(function (response) {
                sendSyonet(data)
                    .then(function (res) {
                        resolve(response);
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
            })
            .catch(function (err) {
                console.error(err);
            });
    } catch (error) {
        reject(error);
    }
}

function submit(form) {
    const formData = new FormData($("form#wrapped")[0]);
    formData.append('week_close', $('#week_open').val() === '24h00' ? '' : $('#week_close').val())
    formData.append('saturday_close', $('#saturday_open').val() === '24h00' ? '' : $('#saturday_close').val())
    formData.append('sunday_close', $('#sunday_open').val() === '24h00' ? '' : $('#sunday_close').val())
    formData.append('holiday_close', $('#holyday_open').val() === '24h00' ? '' : $('#holyday_close').val())

    print(formData);

    $.ajax({
        url: 'https://webservice.jogga.com.br/api/lead/revenda-moura',
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
            console.log('submited');
        });
}

$("form#wrapped").validate({
    focusInvalid: true,
    messages: generateMessages(),
    rules: generateValidations(),
    submitHandler: function (form) {
        modalConfirm(form);
    },
});