export class BasePage {
    constructor(path) {
        this.baseUrl = "http://tredgate.com/pmtool/index.php?";
        this.path = path;
        // cy.log(`Page url: ${this.baseUrl}${this.path}`)
    }

    visit() {
        cy.visit(this.baseUrl + this.path);
        return this;
    }
}