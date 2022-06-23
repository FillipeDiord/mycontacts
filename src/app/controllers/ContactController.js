class ContactController {
  index(request, response) {
    // Listar todos os registros

    response.send('Send from Contact Controller');
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // editar UM registro
  }

  delete() {
    // Deletar UM registro
  }
}

// Padrão Singleton
module.exports = new ContactController();
