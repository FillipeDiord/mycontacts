const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Fillipe',
    email: 'fillipe@mail.com',
    phone: '124451694',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Ligia',
    email: 'liginha@mail.com',
    phone: '12445169411',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
