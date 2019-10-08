<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="description" content="Revenda Digital Moura">
    <title>Revenda Digital Moura</title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">

    <!-- BASE CSS -->
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/icon_fonts/css/all_icons_min.css" rel="stylesheet">
    <link href="css/magnific-popup.min.css" rel="stylesheet">
    <link href="css/skins/square/yellow.css" rel="stylesheet">

    <!-- YOUR CUSTOM CSS -->
    <link href="css/custom.css" rel="stylesheet">
</head>

<body>

    <div id="loader_form">
        <div data-loader="circle-side-2"></div>
    </div>
    <div class="texto-intro col-sm-5" style="background-color:#fff">
        <img src="https://jogga-bucket.s3-sa-east-1.amazonaws.com/moura-static/Logo+Parceria+Digital+Moura.png" alt="">
        <br><br>
        <button id="openMenu">Cadastrar revenda</button>
    </div>
    <div class="layer"></div>
    <div id="main_container">

        <div id="header_in">
            <a href="#0" class="close_in "><i class="pe-7s-close-circle"></i></a>
        </div>

        <div class="wrapper_in">

            <div class="container-fluid">
                <div class="tab-content">
                    <div class="tab-pane fade" id="tab_1">
                        <div class="subheader" id="quote"></div>
                        <div class="row">

                            <aside class="col-xl-3 col-lg-4">
                                <h2>
                                    Preencha o formulário ao lado para cadastrar um novo cliente no programa Revenda
                                    Digital.
                                </h2>
                                <ul class="list_ok">
                                    <li>
                                        Insira suas informações como Distribuidor, as informações da revenda e os
                                        detalhes do investimento.
                                    </li>
                                    <li>Antes de enviar, confira os dados cadastrados.
                                        <b>Eles serão usados para o desenvolvimento do site e da campanha no Google.</b>
                                    </li>
                                    <li>
                                        Uma equipe interna avaliará o pedido, aguarde uma confirmação da nossa equipe.
                                    </li>
                                </ul>
                            </aside>
                            <div class="col-xl-9 col-lg-8">
                                <div id="wizard_container">

                                    <div id="top-wizard">
                                        <strong>Progresso</strong>
                                        <div id="progressbar"></div>
                                    </div>
                                    <form name="example-1" id="wrapped" method="POST" enctype="multipart/form-data">
                                        <input id="website" name="website" type="text" value="">
                                        <div id="middle-wizard">

                                            <div class="step">
                                                <h3 class="main_question">
                                                    <strong>1/3</strong>Informações do distribuidor
                                                </h3>

                                                <div class="row form-group">
                                                    <div class="col-sm-12">
                                                        <label>Nome do distribuidor:</label>
                                                        <div class="styled-select">
                                                            <select class="required" id="distributor" name="distributor">
                                                                <option disabled selected>Selecione um distribuidor</option>
                                                                <option value="Alagoana Matriz">Alagoana Matriz</option>
                                                                <option value="Alagoana Filial Arapiraca">Alagoana Filial Arapiraca</option>
                                                                <option value="Anápolis">Anápolis</option>
                                                                <option value="Autobate Matriz">Autobate Matriz</option>
                                                                <option value="Autobate Filial Itabuna">Autobate Filial Itabuna</option>
                                                                <option value="Avic Matriz">Avic Matriz</option>
                                                                <option value="Avic Filial Guarapuava">Avic Filial Guarapuava</option>
                                                                <option value="Avic Filial Joinville">Avic Filial Joinville</option>
                                                                <option value="Avic Filial Ponta Grossa">Avic Filial Ponta Grossa</option>
                                                                <option value="Bandeirantes Matriz">Bandeirantes Matriz</option>
                                                                <option value="Bandeirantes Filial Poços">Bandeirantes Filial Poços</option>
                                                                <option value="Batermol">Batermol</option>
                                                                <option value="Bauru">Bauru</option>
                                                                <option value="Belo Jardim">Belo Jardim</option>
                                                                <option value="Bonfim">Bonfim</option>
                                                                <option value="Brasiliense">Brasiliense</option>
                                                                <option value="Campo Grande Matriz">Campo Grande Matriz</option>
                                                                <option value="Campo Grande Filial Dourados">Campo Grande Filial Dourados</option>
                                                                <option value="Catarinense Matriz">Catarinense Matriz</option>
                                                                <option value="Catarinense Filial Blumenau">Catarinense Filial Blumenau</option>
                                                                <option value="Catarinense Filial Criciúma">Catarinense Filial Criciúma</option>
                                                                <option value="Chapecoense Matriz">Chapecoense Matriz</option>
                                                                <option value="Chapecoense Filial Lages">Chapecoense Filial Lages</option>
                                                                <option value="Codiba">Codiba</option>
                                                                <option value="Comal Matriz">Comal Matriz</option>
                                                                <option value="Comal Filial Cachoeiro">Comal Filial Cachoeiro</option>
                                                                <option value="Comal Filial Linhares">Comal Filial Linhares</option>
                                                                <option value="Combat Matriz">Combat Matriz</option>
                                                                <option value="Combat Filial Juazeiro">Combat Filial Juazeiro</option>
                                                                <option value="Cominas Matriz">Cominas Matriz</option>
                                                                <option value="Cominas Filial Patos de Minas">Cominas Filial Patos de Minas</option>
                                                                <option value="Conorte">Conorte</option>
                                                                <option value="Dinil">Dinil</option>
                                                                <option value="Dirpal">Dirpal</option>
                                                                <option value="Disbac Matriz">Disbac Matriz</option>
                                                                <option value="Disbac Filial Sinop">Disbac Filial Sinop</option>
                                                                <option value="Disbate">Disbate</option>
                                                                <option value="Dismal Matriz">Dismal Matriz</option>
                                                                <option value="Dismal Filial Imperatriz">Dismal Filial Imperatriz</option>
                                                                <option value="Fluminense Matriz">Fluminense Matriz</option>
                                                                <option value="Fluminense Filial Campo Grande">Fluminense Filial Campo Grande</option>
                                                                <option value="Fortaleza Matriz">Fortaleza Matriz</option>
                                                                <option value="Fortaleza Filial Iguatu">Fortaleza Filial Iguatu</option>
                                                                <option value="Fortaleza Filial Sobral">Fortaleza Filial Sobral</option>
                                                                <option value="Godal">Godal</option>
                                                                <option value="Interbahia Matriz">Interbahia Matriz</option>
                                                                <option value="Interbahia Filial Barreiras">Interbahia Filial Barreiras</option>
                                                                <option value="Interbahia Filial Conquista">Interbahia Filial Conquista</option>
                                                                <option value="Juiz de Fora">Juiz de Fora</option>
                                                                <option value="Norte">Norte</option>
                                                                <option value="Nova Iguaçu">Nova Iguaçu</option>
                                                                <option value="Palácio">Palácio</option>
                                                                <option value="Paraense Matriz">Paraense Matriz</option>
                                                                <option value="Paraense Filial Macapá">Paraense Filial Macapá</option>
                                                                <option value="Paraense Filial Marabá">Paraense Filial Marabá</option>
                                                                <option value="Paraense Filial Santarém">Paraense Filial Santarém</option>
                                                                <option value="Paraíba">Paraíba</option>
                                                                <option value="Paulista Matriz">Paulista Matriz</option>
                                                                <option value="Paulista Filial Campo Limpo">Paulista Filial Campo Limpo</option>
                                                                <option value="Paulista Filial Osasco">Paulista Filial Osasco</option>
                                                                <option value="Piauiense">Piauiense</option>
                                                                <option value="Porto Velho">Porto Velho</option>
                                                                <option value="Presidente Prudente">Presidente Prudente</option>
                                                                <option value="Rodmaster Matriz">Rodmaster Matriz</option>
                                                                <option value="Rodmaster Filial Caxias">Rodmaster Filial Caxias</option>
                                                                <option value="Santa Maria Matriz">Santa Maria Matriz</option>
                                                                <option value="Santa Maria Filial Passo Fundo">Santa Maria Filial Passo Fundo</option>
                                                                <option value="Serve Vale Matriz">Serve Vale Matriz</option>
                                                                <option value="Serve Vale Filial Taubaté">Serve Vale Filial Taubaté</option>
                                                                <option value="Sorocaba">Sorocaba</option>
                                                                <option value="Tocantins">Tocantins</option>
                                                                <option value="Triângulo">Triângulo</option>
                                                                <option value="União Matriz">União Matriz</option>
                                                                <option value="União Filial Santos">União Filial Santos</option>
                                                                <option value="Volta Redonda">Volta Redonda</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <label>Nome completo do responsável pelo cadastro da revenda:</label>
                                                        <input type="text" name="registration_responsible" class="form-control required" placeholder="Digite seu nome">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>E-mail do responsável pelo cadastro</label>
                                                        <input type="email" name="email_responsible" class="form-control required" placeholder="Ex: email@example.com" title="Digite um e-mail válido">
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label>Telefone fixo ou celular do responsável pelo cadastro</label>
                                                        <input type="text" name="phone_responsible" class="form-control required phone_mobile" id="tel" placeholder="Ex: (00) 3333-3333 ou (00) 99999-9999" id="phone_responsible" size="20">
                                                    </div>
                                                </div>
                                            </div><!-- /step 1-->

                                            <div class="step">

                                                <!-- Dados do Cliente -->
                                                <h3 class="main_question">
                                                    <strong>2/3</strong>Dados da revenda
                                                </h3>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>Código AX:</label>
                                                        <input type="text" name="code_ax" class="form-control required code_ax" placeholder="Código AX: 1234567" maxlength="7" pattern="([0-9]{3})">
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label>CNPJ:</label>
                                                        <input type="text" name="client_cnpj" class="form-control cnpj required" placeholder="CNPJ: 00.000.000/0000-00">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>Razão social:</label>
                                                        <input type="text" name="company_name" class="form-control required" placeholder="Razão Social">
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label>Nome fantasia:</label>
                                                        <input type="text" name="trading_name" class="form-control required" placeholder="Nome Fantasia">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>Nome do responsável pela revenda:</label>
                                                        <input type="text" name="client_name" class="form-control required" placeholder="Nome do cliente">
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <label>E-mail do responsável pela revenda:</label>
                                                        <input type="email" name="client_email" class="form-control required" title="Digite um e-mail válido" placeholder="Ex: email@example.com">
                                                    </div>
                                                </div>

                                                <div class="row">

                                                    <div class="col-sm-6">
                                                        <label>Whatsapp do responsável pela revenda:</label>
                                                        <input type="text" name="client_whatsapp" class="form-control required phone_mobile" placeholder="Ex: (00) 3333-3333 ou (00) 99999-9999" id="whatsapp_clinet" size="20" maxlength="15">
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div>
                                                            <label>Você possui o arquivo com marca da revenda?</label>
                                                        </div>
                                                        <div class="styled-select">
                                                            <select class="required" name="has_logo">
                                                                <option disabled selected>Selecione uma opção</option>
                                                                <option value="Sim">Sim</option>
                                                                <option value="Não">Não</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>Envie a logo da revenda:</label>
                                                        <div class="fileupload" style="margin-top:-6px">
                                                            <input type="file" id="fileupload" name="fileupload" accept="image/*,doc,pdf">
                                                        </div>
                                                        <label>
                                                            <small>Formatos: gif, jpg, jpeg, .png, .doc, .pdf - Máximo de :
                                                                15MB
                                                            </small>
                                                        </label>
                                                    </div>
                                                </div>

                                                <hr>
                                                <h3 class="main_question">
                                                    Dados da Loja
                                                </h3>

                                                <div class="row">
                                                    <div class="col-sm-12 col-md-6">
                                                        <label>Telefone:</label>
                                                        <input type="text" name="store_phone" class="form-control required phone" placeholder="Apenas Telefone Fixo: (00) 3333-3333" id="telefone" size="20" maxlength="14">
                                                    </div>
                                                </div>

                                                <h3 class="main_question">
                                                    Endereço da Loja
                                                </h3>

                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label>CEP:</label>
                                                        <input id="cep" type="text" class="form-control required" name="store_cep" placeholder="Apenas Números">
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <label>Logradouro:</label>
                                                        <input disabled id="logradouro" type="text" class="form-control required" name="store_street">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label>Número:</label>
                                                        <input id="numero" type="text" class="form-control required" name="store_number">
                                                    </div>
                                                    <div class="col-sm-8">
                                                        <label>Complemento:</label>
                                                        <input id="complemento" type="text" class="form-control" name="store_complement">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <label>Bairro:</label>
                                                        <input disabled id="bairro" type="text" class="form-control required" name="store_neighborhood">
                                                    </div>

                                                    <div class="col-sm-4">
                                                        <label>Cidade:</label>
                                                        <input disabled id="cidade" type="text" class="form-control required" name="store_city">
                                                    </div>

                                                    <div class="col-sm-4">
                                                        <label>Estado:</label>
                                                        <div class="styled-select">
                                                            <select disabled id="uf" name="store_state">
                                                                <option disabled selected>Selecione um Estado</option>
                                                                <option value="AC">Acre</option>
                                                                <option value="AL">Alagoas</option>
                                                                <option value="AP">Amapá</option>
                                                                <option value="AM">Amazonas</option>
                                                                <option value="BA">Bahia</option>
                                                                <option value="CE">Ceará</option>
                                                                <option value="DF">Distrito Federal</option>
                                                                <option value="ES">Espírito Santo</option>
                                                                <option value="GO">Goiás</option>
                                                                <option value="MA">Maranhão</option>
                                                                <option value="MT">Mato Grosso</option>
                                                                <option value="MS">Mato Grosso do Sul</option>
                                                                <option value="MG">Minas Gerais</option>
                                                                <option value="PA">Pará</option>
                                                                <option value="PB">Paraíba</option>
                                                                <option value="PR">Paraná</option>
                                                                <option value="PE">Pernambuco</option>
                                                                <option value="PI">Piauí</option>
                                                                <option value="RJ">Rio de Janeiro</option>
                                                                <option value="RN">Rio Grande do Norte</option>
                                                                <option value="RS">Rio Grande do Sul</option>
                                                                <option value="RO">Rondônia</option>
                                                                <option value="RR">Roraima</option>
                                                                <option value="SC">Santa Catarina</option>
                                                                <option value="SP">São Paulo</option>
                                                                <option value="SE">Sergipe</option>
                                                                <option value="TO">Tocantins</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Horário de Atendimento -->
                                                <hr>
                                                <h3 class="main_question">
                                                    Horário de atendimento da revenda
                                                </h3>

                                                <div class="row">
                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Seg a Sex - Abre às:</label>
                                                        <div class="styled-select">
                                                            <select id="week_open" name="week_open">
                                                                <option value="24h00">Funciona 24h</option>
                                                                <option value="00h00">00h00</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Seg a Sex - Fecha às:</label>
                                                        <div class="styled-select">
                                                            <select id="week_close" name="week_close">
                                                                <option value=""></option>
                                                                <option value="00h00">00h00</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Sábado - Abre às:</label>
                                                        <div class="styled-select">
                                                            <select id="saturday_open" name="saturday_open">
                                                                <option value="Não abre">Não abre</option>
                                                                <option value="24h00">Funciona 24h</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Sábado - Fecha às:</label>
                                                        <div class="styled-select">
                                                            <select id="saturday_close" name="saturday_close">
                                                                <option value="Não abre">Não abre</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Domingo - Abre às:</label>
                                                        <div class="styled-select">
                                                            <select id="sunday_open" name="sunday_open">
                                                                <option value="Não abre">Não abre</option>
                                                                <option value="24h00">Funciona 24h</option>
                                                                <option value="00h00">00h00</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Domigo - Fecha às:</label>
                                                        <div class="styled-select">
                                                            <select id="sunday_close" name="sunday_close">
                                                                <option value="Não abre">Não abre</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Feriado - Abre às:</label>
                                                        <div class="styled-select">
                                                            <select id="holyday_open" name="holiday_open">
                                                                <option value="Não abre">Não abre</option>
                                                                <option value="24h00">Funciona 24h</option>
                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6 col-md-3">
                                                        <label>Feriado - Fecha às:</label>
                                                        <div class="styled-select">
                                                            <select id="holyday_close" name="holiday_close">

                                                                <option value="00h30">00h30</option>
                                                                <option value="01h00">01h00</option>
                                                                <option value="01h30">01h30</option>
                                                                <option value="02h00">02h00</option>
                                                                <option value="02h30">02h30</option>
                                                                <option value="03h00">03h00</option>
                                                                <option value="03h30">03h30</option>
                                                                <option value="04h00">04h00</option>
                                                                <option value="04h30">04h30</option>
                                                                <option value="05h00">05h00</option>
                                                                <option value="05h30">05h30</option>
                                                                <option value="06h00">06h00</option>
                                                                <option value="07h30">07h30</option>
                                                                <option value="08h00">08h00</option>
                                                                <option value="09h30">09h30</option>
                                                                <option value="10h00">10h00</option>
                                                                <option value="10h30">10h30</option>
                                                                <option value="11h00">11h00</option>
                                                                <option value="11h30">11h30</option>
                                                                <option value="12h00">12h00</option>
                                                                <option value="12h30">12h30</option>
                                                                <option value="13h00">13h00</option>
                                                                <option value="13h30">13h30</option>
                                                                <option value="14h00">14h00</option>
                                                                <option value="14h30">14h30</option>
                                                                <option value="15h00">15h00</option>
                                                                <option value="15h30">15h30</option>
                                                                <option value="16h00">16h00</option>
                                                                <option value="16h30">16h30</option>
                                                                <option value="17h00">17h00</option>
                                                                <option value="17h30">17h30</option>
                                                                <option value="18h00">18h00</option>
                                                                <option value="18h30">18h30</option>
                                                                <option value="19h00">19h00</option>
                                                                <option value="19h30">19h30</option>
                                                                <option value="20h00">20h00</option>
                                                                <option value="20h30">20h30</option>
                                                                <option value="21h00">21h00</option>
                                                                <option value="21h30">21h30</option>
                                                                <option value="22h00">22h00</option>
                                                                <option value="22h30">22h30</option>
                                                                <option value="23h00">23h00</option>
                                                                <option value="23h30">23h30</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr>
                                                <h3 class="main_question">
                                                    Dados sobre entrega de bateria
                                                </h3>
                                                <div class="row">

                                                    <div class="col-sm-6">
                                                        <div>
                                                            <label>Faz a entrega?</label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Sim
                                                                <input name="has_delivery" type="radio" value="Faz entrega" class="icheck required">
                                                            </label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Não
                                                                <input name="has_delivery" type="radio" value="Não entrega" class="icheck required">
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div>
                                                            <label>A entrega é grátis?</label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Sim
                                                                <input name="delivery_tax" type="radio" value="Entrega grátis" class="icheck required">
                                                            </label>
                                                        </div>

                                                        <div class="form-group radio_questions">
                                                            <label>Não
                                                                <input name="delivery_tax" type="radio" value="Cobra pela entrega" class="icheck required">
                                                            </label>
                                                        </div>

                                                        <div>
                                                            <input type="text" name="delivery_cost" class="form-control money" placeholder="Preço da entrega: R$ 00,00" id="cost_delivery" size="20" maxlength="14">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div>
                                                            <label>Realiza a Instalação da Bateria?</label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Sim
                                                                <input name="has_installation" type="radio" value="Faz a instalação" class="icheck required">
                                                            </label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Não
                                                                <input name="has_installation" type="radio" value="Não faz a instalação" class="icheck required">
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div>
                                                            <label>A instalação é grátis?</label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Sim
                                                                <input name="installation_tax" type="radio" value="A instalação é gratuita" class="icheck required">
                                                            </label>
                                                        </div>
                                                        <div class="form-group radio_questions">
                                                            <label>Não
                                                                <input name="installation_tax" type="radio" value="Cobra pela instalação" class="icheck required">
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <input type="text" name="installation_cost" class="form-control money" placeholder="Preço da instalação: R$ 00,00" id="reais" size="20" maxlength="14">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <label>Raio da entrega?</label>
                                                        <input type="text" name="delivery_radius" placeholder="Qual é o raio da entrega em quilômetros" class="form-control">
                                                    </div>

                                                    <div class="col-sm-12">
                                                        <div class="form-group textarea_info">
                                                            <label>Entrega em quais bairros?</label>
                                                            <textarea name="delivery_neighborhood" class="form-control" style="height:100px;" placeholder="Ex: Bairro1; Bairro2"></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12">
                                                        <div class="form-group textarea_info">
                                                            <label>Entrega em quais cidades?</label>
                                                            <textarea name="delivery_city" class="form-control" style="height:100px;" placeholder="Ex: Cidade1; Cidade2"></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Instalação -->
                                                <!--                                                <hr>-->
                                                <!--                                                <h3 class="main_question">-->
                                                <!--                                                    Intalação-->
                                                <!--                                                </h3>-->

                                                <!--                                                <div class="row">-->
                                                <!--                                                   -->
                                                <!--                                                </div>-->

                                                <!-- Formas de Pagamento -->
                                                <hr>
                                                <h3 class="main_question">
                                                    Formas de pagamento aceitas pela revenda
                                                </h3>
                                                <div class="row">
                                                    <div class="form-group checkbox_questions col-sm-2" style="padding-top: 10px">
                                                        <label>
                                                            <input name="payment_money" type="checkbox" value="Sim" class="icheck">Dinheiro
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-2" style="padding-top: 10px">
                                                        <label>
                                                            <input name="payment_check" type="checkbox" value="Sim" class="icheck">Cheque
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-2" style="padding-top: 10px">
                                                        <label>
                                                            <input name="payment_debit" type="checkbox" value="Sim" class="icheck">Débito
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-2" style="padding-top: 10px">
                                                        <label>
                                                            <input name="payment_credit" type="checkbox" value="Sim" class="icheck">Crédito
                                                        </label>
                                                    </div>


                                                    <div class="styled-select col-sm-4">
                                                        <select name="payment_installment">
                                                            <option disabled selected>Parcelamento</option>
                                                            <option value="1x">1x Sem Juros</option>
                                                            <option value="1x">1x Com Juros</option>
                                                            <option value="2x">2x Sem Juros</option>
                                                            <option value="2x">2x Com Juros</option>
                                                            <option value="3x">3x Sem Juros</option>
                                                            <option value="3x">3x Com Juros</option>
                                                            <option value="4x">4x Sem Juros</option>
                                                            <option value="4x">4x Com Juros</option>
                                                            <option value="5x">5x Sem Juros</option>
                                                            <option value="5x">5x Com Juros</option>
                                                            <option value="6x">6x Sem Juros</option>
                                                            <option value="6x">6x Com Juros</option>
                                                            <option value="7x">7x Sem Juros</option>
                                                            <option value="7x">7x Com Juros</option>
                                                            <option value="8x">8x Sem Juros</option>
                                                            <option value="8x">8x Com Juros</option>
                                                            <option value="9x">9x Sem Juros</option>
                                                            <option value="9x">9x Com Juros</option>
                                                            <option value="10x">10x Sem Juros</option>
                                                            <option value="10x">10x Com Juros </option>
                                                            <option value="11x">11x Sem Juros</option>
                                                            <option value="11x">11x Com Juros</option>
                                                            <option value="12x">12x Sem Juros</option>
                                                            <option value="12x">12x Com Juros</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <!-- Tipo de Bateria -->
                                                <hr>
                                                <h3 class="main_question">
                                                    Escolha os Tipos de Bateria Que Irá Anunciar no Google
                                                </h3>
                                                <div class="row">
                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_type_light" type="checkbox" value="Sim" class="icheck">Automotiva
                                                            Leve
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_type_weight" type="checkbox" value="Sim" class="icheck">Automotiva
                                                            Pesada
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_motorcycle" type="checkbox" value="Sim" class="icheck">Moto
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_boat" type="checkbox" value="Sim" class="icheck">Boat
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_no_break" type="checkbox" value="Sim" class="icheck">No-break
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_traction" type="checkbox" value="Sim" class="icheck">Tracionária
                                                        </label>
                                                    </div>

                                                    <div class="form-group checkbox_questions col-sm-3">
                                                        <label>
                                                            <input name="battery_stationary" type="checkbox" value="Sim" class="icheck">Estacionária
                                                        </label>
                                                    </div>
                                                </div>

                                                <!-- Outros Serviços -->
                                                <hr>
                                                <h3 class="main_question">
                                                    Outros Serviços
                                                </h3>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>Vende Óleo Lubel?</label>
                                                        <div class="styled-select col-sm-4">
                                                            <select class="required" name="sell_oil">
                                                                <option value="Não">Não</option>
                                                                <option value="Sim">Sim</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <label>Faz Troca de Óleo?</label>
                                                        <div class="styled-select col-sm-4">
                                                            <select class="required" name="change_oil">
                                                                <option value="Não">Não</option>
                                                                <option value="Sim">Sim</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div><!-- /step 2-->

                                            <div class="step submit">

                                                <h3 class="main_question">
                                                    <strong>3/3</strong>Informações sobre investimento
                                                </h3>

                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <label>
                                                            Volume de baterias médio mensal comprado pelo cliente
                                                        </label>
                                                        <input type="text" name="average_volume" class="required form-control">
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <label>
                                                            Volume mensal acordado para participação no PDM
                                                        </label>
                                                        <input type="text" name="monthly_volume" class="required form-control">
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <label>
                                                            Sugestão de palavras chaves
                                                        </label>
                                                        <textarea style="height: auto" rows="3" type="text" name="google_key_words" class="required form-control" placeholder="Ex: Bairro, Nome do Concorrente, Av. Principal" id="google_key_words">

                                                        </textarea>
                                                    </div>
                                                </div>

                                                <div class="row">

                                                    <div class="col-sm-6">
                                                        <label>
                                                            Valor investido <b>por mês</b> no Google
                                                        </label>
                                                        <input type="text" name="google_budget" class="required form-control money" placeholder="Ex: R$ 0.000,00" id="google_budget" size="20" maxlength="14">
                                                    </div><!-- /col-sm-6 -->

                                                    <div class="col-sm-6">
                                                        <div class="form-group">
                                                            <label>Duração da Campanha</label>
                                                            <div class="styled-select">
                                                                <select class="required" name="campaign_duration">
                                                                    <option disabled selected>Selecione a duração da Campanha</option>
                                                                    <?php include 'php/component/campaign_options.php' ?>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div><!-- /col-sm-6 -->


                                                    <!-- <div class="col-sm-6">
                                                        <label>
                                                            Percentual da mídia google a ser pago mensalmente pela Moura e Distribuidor:
                                                        </label>
                                                        <div class="styled-select">
                                                            <select class="required" name="moura_percent">
                                                                <option value="" selected></option>
                                                                <option value="100% Moura e Distribuidor">100% Moura e Distribuidor</option>
                                                                <option value="50% Moura e 50% Cliente">50% Moura e 50% Cliente</option>
                                                            </select>
                                                        </div>
                                                    </div>-->

                                                </div><!-- /row -->

                                                <div class="form-group checkbox_questions">
                                                    <input name="confirmation" type="checkbox" class="icheck required" value="yes">
                                                    <label>
                                                        Confirmo que as informações preenchidas neste formulário estão corretas.
                                                    </label>
                                                </div>

                                                <div class="form-group checkbox_questions">
                                                    <input name="terms" type="checkbox" class="icheck required" value="yes">
                                                    <label>
                                                        <a type="application/octet-stream" target="_blank" download href="https://s3-sa-east-1.amazonaws.com/jogga-bucket/uploads/moura-pdfs/Termo+de+Participa%C3%A7%C3%A3o+DISTRIBUIDOR.pdf">
                                                            Li e aceito os termos e condições
                                                        </a>
                                                    </label>
                                                </div>
                                                <p style="text-align: right; margin-top: 10px;">Antes de salvar, confira se as informações preenchidas estão corretas</p>
                                            </div><!-- /step 3-->

                                        </div><!-- /middle-wizard -->

                                        <div id="bottom-wizard">

                                            <button type="button" name="backward" class="backward">Voltar</button>
                                            <button type="button" name="forward" class="forward">Avançar</button>
                                            <button type="submit" name="process" class="submit">Enviar</button>

                                        </div><!-- /bottom-wizard -->

                                    </form>
                                </div><!-- /Wizard container -->

                            </div><!-- /col -->
                        </div><!-- /row -->
                    </div><!-- /TAB 1:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->

                    <div class="tab-pane fade" id="tab_2">
                        <div class="subheader" id="about"></div>
                        <div class="row">
                            <div class="col-lg-8">
                                <h2>Welcome to Quote</h2>
                                <p class="lead">An mei sadipscing dissentiet, eos ea partem viderer facilisi. Brute nostrud
                                    democritum in vis, nam ei erat zril mediocrem. No postea diceret vix. Mei eu scripta
                                    dolorum voluptatibus, id omnes repudiare pri.</p>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box_feat" id="icon_1">
                                            <span></span>
                                            <h3>Responsive site design</h3>
                                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.
                                                In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box_feat" id="icon_2">
                                            <span></span>
                                            <h3>Web site check</h3>
                                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.
                                                In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
                                        </div>
                                    </div>
                                </div><!-- /row -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box_feat" id="icon_3">
                                            <h3>Email campaigns</h3>
                                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.
                                                In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="box_feat" id="icon_4">
                                            <h3>Seo optimization</h3>
                                            <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.
                                                In eum omnes molestie. Sed ad debet scaevola, ne mel.</p>
                                        </div>
                                    </div>
                                </div><!-- /row -->
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="about_info">
                                            <i class="pe-7s-news-paper"></i>
                                            <h4>A brief about
                                                Quote<span>Suas summo id sed, erat erant oporteat cu pri.</span></h4>
                                            <p>Cum iusto nonumes dignissim ad, movet vocent ceteros nec ut. Eu putent
                                                utroque ius, ei usu purto doctus, ludus nostrud consectetuer ex pri. Maiorum
                                                petentium similique duo id. Sea ex nostro offendit, ius sumo electram
                                                theophrastus et. Nam eu dolore aliquid laoreet, ei eos tacimates assueverit
                                                inciderint. His deserunt recteque consequat in. Vis mucius virtute consequat
                                                ad, suavitate interesset an mei, oporteat temporibus at sea.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="about_info">
                                            <i class="pe-7s-light"></i>
                                            <h4>Mission<span>Suas summo id sed, erat erant oporteat cu pri.</span></h4>
                                            <p>Cum iusto nonumes dignissim ad, movet vocent ceteros nec ut. Eu putent
                                                utroque ius, ei usu purto doctus, ludus nostrud consectetuer ex pri. Maiorum
                                                petentium similique duo id. Sea ex nostro offendit, ius sumo electram
                                                theophrastus et. Nam eu dolore aliquid laoreet, ei eos tacimates assueverit
                                                inciderint. His deserunt recteque consequat in. Vis mucius virtute consequat
                                                ad, suavitate interesset an mei, oporteat temporibus at sea.</p>
                                        </div>
                                    </div>
                                </div><!-- /row -->
                            </div><!-- /col -->

                            <aside class="col-lg-4">
                                <div class="more_padding_left">
                                    <div class="widget" id="review">
                                        <h4>reviews</h4>
                                        <div class="owl-carousel owl-theme add_bottom_30">

                                            <div class="item">
                                                <blockquote class="testimonial">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Donec hendrerit vehicula est, in
                                                        consequat. Donec hendrerit vehicula est, in consequat. Donec
                                                        hendrerit vehicula est, in consequat.
                                                    </p>
                                                </blockquote>
                                                <div class="testimonial-arrow-down">
                                                </div>
                                                <div class="testimonial-author">
                                                    <div class="img-thumbnail img-thumbnail-small">
                                                        <img src="img/avatar1.jpg" alt="">
                                                    </div>
                                                    <p>
                                                        <strong>Mark Smith</strong><span>October 2016</span>
                                                    </p>
                                                </div>
                                            </div><!-- /item -->

                                            <div class="item">
                                                <blockquote class="testimonial">
                                                    <p>
                                                        Donec hendrerit vehicula est, in consequat. Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in
                                                        consequat. Donec hendrerit vehicula est, in consequat. Donec
                                                        hendrerit vehicula est, in consequat.
                                                    </p>
                                                </blockquote>
                                                <div class="testimonial-arrow-down">
                                                </div>
                                                <div class="testimonial-author">
                                                    <div class="img-thumbnail img-thumbnail-small">
                                                        <img src="img/avatar2.jpg" alt="">
                                                    </div>
                                                    <p>
                                                        <strong>Mark Smith</strong><span>September 2016</span>
                                                    </p>
                                                </div>
                                            </div><!-- /item -->

                                            <div class="item">
                                                <blockquote class="testimonial">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                                        hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Donec hendrerit vehicula est, in
                                                        consequat. Donec hendrerit vehicula est, in consequat.
                                                    </p>
                                                </blockquote>
                                                <div class="testimonial-arrow-down">
                                                </div>
                                                <div class="testimonial-author">
                                                    <div class="img-thumbnail img-thumbnail-small">
                                                        <img src="img/avatar3.jpg" alt="">
                                                    </div>
                                                    <p>
                                                        <strong>Mark Smith</strong><span>July 2016</span>
                                                    </p>
                                                </div>
                                            </div><!-- /item -->

                                        </div><!-- /carousel -->
                                    </div><!-- /reviews -->

                                    <div class="widget" id="gallery">
                                        <h4>gallery</h4>
                                        <ul class="magnific-gallery">

                                            <li>
                                                <a href="img/gallery/large_1.jpg" title="image title">
                                                    <figure><img src="img/gallery/thumb_1.jpg" alt="thumb"></figure>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="img/gallery//large_2.jpg" title="image title">
                                                    <figure><img src="img/gallery/thumb_2.jpg" alt="thumb"></figure>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="img/gallery/large_3.jpg" title="image title">
                                                    <figure><img src="img/gallery/thumb_3.jpg" alt="thumb"></figure>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="img/gallery/large_4.jpg" title="image title">
                                                    <figure><img src="img/gallery/thumb_2.jpg" alt="thumb"></figure>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="img/gallery/large_5.jpg" title="image title">
                                                    <figure><img src="img/gallery/thumb_3.jpg" alt="thumb"></figure>
                                                </a>
                                            </li>

                                        </ul>
                                    </div><!-- /gallery -->

                                    <div class="widget" id="follow">
                                        <h4>follow us</h4>
                                        <ul>
                                            <li><a href="#"><i class="icon-facebook"></i>Facebook</a></li>
                                            <li><a href="#"><i class="icon-twitter"></i>Twitter</a></li>
                                            <li><a href="#"><i class="icon-google"></i>Google plus</a></li>
                                            <li><a href="#"><i class="icon-instagram"></i>Instagram</a></li>
                                        </ul>
                                    </div><!-- /follow -->

                                </div><!-- /more padding left -->
                            </aside>
                        </div><!-- /row -->
                    </div><!-- /TAB 2:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->

                    <div class="tab-pane fade" id="tab_3">

                        <div id="map_contact"></div><!-- /map -->

                        <div id="contact_info">
                            <div class="row">

                                <div class="col-md-4">
                                    <div class="box_contact">
                                        <i class="pe-7s-map-marker"></i>
                                        <h4>Address</h4>
                                        <p>Duo magna vocibus electram ad. Sit an amet aeque legimus, paulo mnesarchum et
                                            mea, et pri quodsi singulis.</p>
                                        <p>11 Fifth Ave - New York, 45 001238 - USA</p>
                                        <a href="https://www.google.com/maps/dir//11+5th+Ave,+New+York,+NY+10003,+Stati+Uniti/@40.7322935,-73.9981148,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c25990b3af8bb9:0x854ae1d3553155!2m2!1d-73.9959261!2d40.7322935!3e0" class="btn_1" target="_blank">Get directions</a>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="box_contact">
                                        <i class="pe-7s-mail-open-file"></i>
                                        <h4>Email and website</h4>
                                        <p>Duo magna vocibus electram ad. Sit an amet aeque legimus, paulo mnesarchum et
                                            mea, et pri quodsi singulis.</p>
                                        <p>
                                            <strong>Email:</strong> <a href="#0">support@domain.com</a><br>
                                            <strong>Website:</strong> <a href="#0">www.quote.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="box_contact">
                                        <i class="pe-7s-call"></i>
                                        <h4>Telephone</h4>
                                        <p>Duo magna vocibus electram ad. Sit an amet aeque legimus, paulo mnesarchum et
                                            mea, et pri quodsi singulis.</p>
                                        <p>
                                            <strong>Tel:</strong> <a href="#0">+44 543 53433</a><br>
                                            <strong>Fax:</strong> <a href="#0">+44 543 5322</a>
                                        </p>
                                    </div>
                                </div>

                            </div><!-- / row-->
                            <hr>

                            <div id="social">
                                <ul>
                                    <li><a href="#"><i class="icon-facebook"></i></a></li>
                                    <li><a href="#"><i class="icon-twitter"></i></a></li>
                                    <li><a href="#"><i class="icon-google"></i></a></li>
                                    <li><a href="#"><i class="icon-linkedin"></i></a></li>
                                </ul>
                            </div><!-- /social -->

                        </div>
                    </div><!-- /TAB 3:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->

                </div><!-- /tab content -->
            </div><!-- /container-fluid -->
        </div><!-- /wrapper_in -->
    </div><!-- /main_container -->


    <!-- Modal terms -->
    <div class="modal fade" id="terms-txt" tabindex="-1" role="dialog" aria-labelledby="termsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Terms and conditions</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, in porro albucius qui, in <strong>nec quod novum accumsan</strong>, mei
                        ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne
                        quod dicunt sensibus.</p>
                    <p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam
                        dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt
                        sensibus. Lorem ipsum dolor sit amet, <strong>in porro albucius qui</strong>, in nec quod novum
                        accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum
                        sanctus, pro ne quod dicunt sensibus.</p>
                    <p>Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam
                        dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt
                        sensibus.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn_1" data-dismiss="modal">Close</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- SCRIPTS -->
    <!-- Jquery-->
    <script src="js/jquery-3.2.1.min.js"></script>

    <!-- Swwt Alert-->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>

    <!-- Common script -->
    <script src="js/common_scripts_min.js"></script>
    <!-- Theme script -->
    <script src="js/file-validator.js"></script>
    <script src="js/functions_with_upload.js"></script>

    <!-- Google map -->
    <script src="js/mapmarker.jquery.js"></script>
    <script src="js/mapmarker_func.jquery.js"></script>

    <script src="js/cep.js"></script>
    <script type="text/javascript" src="js/maskedinput.js"></script>
    <script type="text/javascript" src="js/maskmoney/src/jquery.maskMoney.js"></script>

    <script type="text/javascript" src="js/validations.js"></script>

    <script>
        $('#openMenu').click(function() {
            $('.layer').addClass('layer-is-visible');
            $('#main_container').addClass('show_container');
            $('.fade.tab-pane#tab_1').addClass('show active');
        });

        if (window.location.search) {
            $('#openMenu').click();
        }

        const today = new Date().getDate();
        const shouldOpenMenuShow = (((today >= 1) && (today <= 20)) || (today <= 24));
        $('#openMenu')[shouldOpenMenuShow ? 'show' : 'hide']();
    </script>
</body>

</html>