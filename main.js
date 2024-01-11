$(document).ready(function(){
        $('#carousel-img').slick({
            autoplay:true
        });

        $('.menuHamburguer').click(function(){
            $('nav').slideToggle();  //verifica o slideDown e Up
        });

        $('#telefone').mask('(00) 00000-0000'); //Máscara de celular com ddd
    
        $('form').validate({     //Para validar o Plugins
            rules:{              //OBS o nome, email etc só funciona se a classe estiver (name="NOME DO QUE QUISER MODIFICAR) EX nome, email"
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                mensagem: {
                    required: true,
                },
                veiculoInteresse: {
                    required: false,
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome'
            },
            submitHandler: function(form){  //Parametro do Formulário
                console.log(form)
            },
            invalidHandler: function(evento, validador){  //Interceptar click por causa do formulário estar inválido
                let camposIncorretos = validador.numberOfInvalids();    //retorna a quantidade de campos incorretos
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                };
            }
        });



        $('.listaVeiculos button').click(function(){    //evento do botao quando der o click rolar a pagina, EX escolhi um carro, quando apertar em 
            const destino = $('#contato');       // tenho interesse, automaticamente ele irá rolar a página até o formulário para finalizar a compra ou cadastro


            const nomeVeiculo = $(this).parent().find('h3').text();  //faz com que acesse o Pai que seria o Li com o Parent, que irá procurar o que esta no H3 que seria um texto
            $('#veiculoInteresse').val(nomeVeiculo);


            $('html').animate({   //para dar animação a tag HTML
                scrollTop: destino.offset().top
            },1000) //milisegundo ou seja 1 segundo
        });
    });