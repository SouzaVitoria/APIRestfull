class HttpRequest{
    static request(method, url, params = {}){ //Método Estático permite que chamamos ele diretamente para que não precise criar uma instancia
                                            //Se o params naão for passado deixa ele vazio
        let ajax = new XMLHttpRequest();
        ajax.open(method.toUpperCase, url); //onde é para chamar e qual metodo utilizar
        ajax.onload = event =>{ //Evento de resposta quando o AJAX estiver pronto
              let obj = { users: []}//Para evitar erros no forEach deixar o array vazio
              try{
                  obj = JSON.parse(ajax.responseText); //ResponseText terá exatamente a informação que o Servidor retornar - CONVERTER EM OBJETO porque é um json
                  //Se responseText não for um objeto valido pode ter erro, para garantir que não tenha TRY CATH
              } catch(e){
                  console.error(e);
              }
        } 
        ajax.send(); //Chamar solicitação AJAX
    }
}