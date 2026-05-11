 let menuRestaurante = [];

        function mostrarMenu() {
            document.getElementById('telaInicial').style.display = 'none';
            document.getElementById('menuPrincipal').style.display = 'block';
        }

        function voltarInicial() {
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('formCadastro').style.display = 'none';
            document.querySelectorAll('.lista-menu').forEach(el => el.style.display = 'none');
            document.getElementById('telaInicial').style.display = 'block';
            limparListas();
        }

        function mostrarCadastro() {
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('formCadastro').style.display = 'block';
        }

        function voltarMenu() {
            document.getElementById('formCadastro').style.display = 'none';
            document.getElementById('menuPrincipal').style.display = 'block';
        }

        function cadastrarItem() {
            const tipo = document.getElementById('tipoItem').value;
            const nome = document.getElementById('nomeItem').value;
            const preco = parseFloat(document.getElementById('precoItem').value);

            if (!nome || isNaN(preco) || preco <= 0) {
                alert('❌ Preencha todos os campos corretamente!');
                return;
            }

            const item = {
                tipo: tipo,
                nome: nome,
                preco: preco
            };

            menuRestaurante.push(item);
            
            document.getElementById('nomeItem').value = '';
            document.getElementById('precoItem').value = '';

            alert('✅ Item cadastrado com sucesso!');
        }

        function exibirMenuCompleto() {
            ocultarTodasListas();
            const lista = document.getElementById('listaCompleta');
            lista.innerHTML = '<h2>🍽️ Menu Completo</h2>';
            
            if (menuRestaurante.length === 0) {
                lista.innerHTML += '<p style="color: #666; font-size: 1.2em;">Nenhum item cadastrado ainda!</p>';
            } else {
                menuRestaurante.forEach((item, index) => {
                    lista.innerHTML += criarCardItem(item, index);
                });
            }
            
            lista.style.display = 'block';
        }

        function exibirPratosQuentes() {
            ocultarTodasListas();
            const lista = document.getElementById('listaCompleta');
            lista.innerHTML = '<h2>🍲 Pratos Quentes</h2>';
            
            const pratos = menuRestaurante.filter(item => item.tipo === 'Prato');
            
            if (pratos.length === 0) {
                lista.innerHTML += '<p style="color: #666; font-size: 1.2em;">Nenhum prato cadastrado!</p>';
            } else {
                pratos.forEach((item, index) => {
                    lista.innerHTML += criarCardItem(item, index);
                });
            }
            
            lista.style.display = 'block';
        }

        function exibirBebidas() {
            ocultarTodasListas();
            const lista = document.getElementById('listaCompleta');
            lista.innerHTML = '<h2>🥤 Bebidas e Sucos</h2>';
            
            const bebidas = menuRestaurante.filter(item => item.tipo === 'Bebida');
            
            if (bebidas.length === 0) {
                lista.innerHTML += '<p style="color: #666; font-size: 1.2em;">Nenhuma bebida cadastrada!</p>';
            } else {
                bebidas.forEach((item, index) => {
                    lista.innerHTML += criarCardItem(item, index);
                });
            }
            
            lista.style.display = 'block';
        }

        function exibirLanches() {
            ocultarTodasListas();
            const lista = document.getElementById('listaCompleta');
            lista.innerHTML = '<h2>🥪 Lanches</h2>';
            
            const lanches = menuRestaurante.filter(item => item.tipo === 'Lanche');
            
            if (lanches.length === 0) {
                lista.innerHTML += '<p style="color: #666; font-size: 1.2em;">Nenhum lanche cadastrado!</p>';
            } else {
                lanches.forEach((item, index) => {
                    lista.innerHTML += criarCardItem(item, index);
                });
            }
            
            lista.style.display = 'block';
        }

        function criarCardItem(item, index) {
            return `
                <div class="item-menu">
                    <div class="item-tipo">${item.tipo}</div>
                    <div class="item-nome">${index + 1}. ${item.nome}</div>
                    <div class="item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
                </div>
            `;
        }

        function ocultarTodasListas() {
            document.querySelectorAll('.lista-menu').forEach(el => el.style.display = 'none');
            document.getElementById('menuPrincipal').style.display = 'none';
            document.getElementById('formCadastro').style.display = 'none';
        }

        function limparListas() {
            document.getElementById('listaCompleta').innerHTML = '';
        }

        function sairApp() {
            document.querySelectorAll('.lista-menu, #menuPrincipal, #formCadastro').forEach(el => el.style.display = 'none');
            document.getElementById('fechamento').style.display = 'block';
        }

        function reiniciarApp() {
            menuRestaurante = [];
            voltarInicial();
            document.getElementById('fechamento').style.display = 'none';
        }