
export class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameField = page.getByRole('textbox', {name: 'Username'});
        this.passwordField = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Log In'});
    }

    async goto(){
        await this.page.goto('https://login.salesforce.com/');
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

