export class Contact {
    name = "";
    surname = "";
    email = "";
    phone = "";
    connected = false;

    constructor(name, surname, email, phone, connected) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.connected = connected
    }
}