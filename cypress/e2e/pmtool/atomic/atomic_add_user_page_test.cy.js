import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { MenuSection } from "../../../page-objects/pmtool/menu_sections";
import { NewUserFormModal } from "../../../page-objects/pmtool/new_user_form_modal";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe('Atomic add users page tests', () => {
    beforeEach(() => {
        const username = Cypress.env("pmtool_username");
        const password = Cypress.env("pmtool_password");
        new LoginPage()
            .openPmtool()
            .typeAdminUserName(username)
            .typeAdminPassword(password)
            .clickLogin();

        new MenuSection().clickUsers();
        new NewUserFormModal().clickAddUserButton().waitForProgressBarVanish();
    });

    context('Add User Form test', () => {
        it('should display "Add User" button', () => {
            new NewUserFormModal().addUserButtonIsVisible();
        });

        it('User status have text', () => {
            new NewUserFormModal().selectUserStatus().UserStatusHaveText('Active');
        });

        it('Access group have text', () => {
            new NewUserFormModal().selectAccesGroup().AccessGroupHaveText('Manager');
        });

        it('Username should be visible', () => {
            const username = 'fifka_petr';
            new NewUserFormModal().typeUsername(username).UsernameIsVisible(username);
        });

        it('Password should be visible', () => {
            const password = 'testPassword';
            new NewUserFormModal().typePassword(password).passwordTestIsVisible(password);
        });

        it('First name should be visible', () => {
            const firstName = 'Ivana';
            new NewUserFormModal().typeFirstName(firstName).firstNameTestIsVisible(firstName);
        });

        it('Last name should be visible', () => {
            const lastName = 'Marikova';
            new NewUserFormModal().typeLastName(lastName).lastNameTestIsVisible(lastName);
        });

        it('Email adress should be visible', () => {
            const exampleEmail = 'example@example.com';
            new NewUserFormModal().typeUserEmail(exampleEmail).userEmailIsVisible(exampleEmail);
        });

        it('Select language have text', () => {
            new NewUserFormModal().selectLanguage().selectLanguageHaveText('English');
        });
    });

    it('Save button should be visible', () => {
        new NewUserFormModal().clickSaveButtonUser();
        new UsersPage().SaveButtonIsVisible();
        new NewUserFormModal().verifyFormValidity();
    });
});
