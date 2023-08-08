import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { MenuSection } from "../../../page-objects/pmtool/menu_sections";
import { NewUserFormModal } from "../../../page-objects/pmtool/new_user_form_modal";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe('Atomic add users page tests', () => {
    beforeEach(() => {
        const adminUserName = Cypress.env("adminUserName");
        const adminPassword = Cypress.env("adminPassword");
        new LoginPage()
            .openPmtool()
            .typeAdminUserName(adminUserName)
            .typeAdminPassword(adminPassword)
            .clickLogin();

        new MenuSection().clickUsers();
        new NewUserFormModal().clickAddUserButton().waitForProgressBarVanish();
    });

    context('Add User Form test', () => {
        it('should display "Add User" button', () => {
            new NewUserFormModal().addUserButtonIsVisible();
        });

        it('User status should have text', () => {
            new NewUserFormModal().selectUserStatus().UserStatusHaveText('Active');
        });

        it('Access group should have text', () => {
            new NewUserFormModal().selectAccesGroup('Manager').AccessGroupHaveText('Manager');
        });

        it('Username should be visible', () => {
            const username = 'fifka_petr';
            new NewUserFormModal().typeUsername(username).UsernameIsVisible();
        });

        it('Username required should be visible', () => {
            new NewUserFormModal().userNameRequiredIsVisible();
        });

        it('Password required should be visible', () => {
            new NewUserFormModal().passwordRequiredIsVisible();
        });

        it('First name required should be visible', () => {
            new NewUserFormModal().firstNameRequiredIsVisible();
        });

        it('Last name required should be visible', () => {
            new NewUserFormModal().lastNameRequiredIsVisible();
        });

        it('User email required should be visible', () => {
            new NewUserFormModal().userEmailRequiredIsVible();
        });

        it('Password should be visible', () => {
            const password = 'testPassword';
            new NewUserFormModal().typePassword(password).passwordTestIsVisible();
        });

        it('First name should be visible', () => {
            const firstName = 'Ivana';
            new NewUserFormModal().typeFirstName(firstName).firstNameTestIsVisible();
        });

        it('Last name should be visible', () => {
            const lastName = 'Marikova';
            new NewUserFormModal().typeLastName(lastName).lastNameTestIsVisible();
        });

        it('Email address should be visible', () => {
            const exampleEmail = 'example@example.com';
            new NewUserFormModal().typeUserEmail(exampleEmail).userEmailIsVisible();
        });

        it('Select language have text', () => {
            new NewUserFormModal().selectLanguage('English').selectLanguageHasText('English');
        });

    });

    it('Save button should be visible', () => {
        new NewUserFormModal().clickSaveButtonUser();
        new UsersPage().SaveButtonIsVisible();
    });
});
