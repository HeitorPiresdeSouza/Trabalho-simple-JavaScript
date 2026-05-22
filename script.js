let cargaTotal=0;

        function adicionarCarga(quantidade){
            const visor = document.querySelector('#peso-visor');
            const statusluz = document.querySelector('#status-luz');
            const limite = 400;
            cargaTotal += quantidade;
            visor.textContent = cargaTotal;

            if (cargaTotal + quantidade > limite) {
                alert("Aviso: Limite máximo de carga atingido!");
            }

            if(cargaTotal>300){
                statusluz.textContent = "ALERTA: SOBRECARGA!";
                statusluz.classList.add("alerta-perigo");
            }      
        }

        function limparCarga(){
            const visor = document.querySelector('#peso-visor');
            const statusluz = document.querySelector('#status-luz');
            
            cargaTotal = 0;
            visor.textContent = cargaTotal;
            statusluz.textContent ="SISTEMA OK";
            statusluz.classList.remove("alerta-perigo");
        }

        function tirarCem(quantidade){
            const visor = document.querySelector('#peso-visor');
            const statusluz = document.querySelector('#status-luz');
            cargaTotal -= quantidade;
            visor.textContent = cargaTotal;

            if(cargaTotal <= 300){
                statusluz.textContent = "SISTEMA OK";
                statusluz.classList.remove("alerta-perigo")
            }

            if (cargaTotal <= 0){
                statusluz.textContent = "ALERTA: O VALOR NÂO PODE SER NEGATIVO!"
                statusluz.classList.add("alerta-perigo");
            } 
            if(cargaTotal>=0){
                statusluz.textContent = "SISTEMA OK";
                statusluz.classList.remove("alerta-perigo");
            }       
        }
        