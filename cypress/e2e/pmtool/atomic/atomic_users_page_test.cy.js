import { HeaderSection } from "../../../page-objects/pmtool/header_sections";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { MenuSection } from "../../../page-objects/pmtool/menu_sections";
import { NewUserFormModal } from "../../../page-objects/pmtool/new_user_form_modal";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe('Atomic users page tests', () => {
    beforeEach(() => {
        const adminUserName = Cypress.env("adminUserName");
        const adminPassword = Cypress.env("adminPassword");
        new LoginPage()
            .openPmtool()
            .typeAdminUserName()
            .typeAdminPassword()
            .clickLogin();

        new MenuSection().clickUsers();
    });

    context('Menu tests', () => {
        it('Users anchor should be visible', () => {
            new MenuSection().usersAnchorIsVisible();
        });

        context('Header section tests', () => {
            it('Profile dropdown should be visible', () => {
                new HeaderSection().profileDropdownIsVisible();
            });

            it('Photo header should be visible', () => {
                new HeaderSection().photoHeaderIsVisible();
            });

            it('Username has text', () => {
                new HeaderSection().userNameHasText();
            });

            it('Notification should be visible', () => {
                new HeaderSection().notificationIsVisible();
            });

            context('Add user button test', () => {
                it('Add user button should be visible', () => {
                    new NewUserFormModal().addUserButtonIsVisible();
                });

                context('User page visibility', () => {
                    it('Field type action buttons should be visible', () => {
                        new UsersPage().fieldTypeActionButtonsIsVisible();
                    });

                    it('Footer Inner should be visible', () => {
                        new UsersPage().footerInnerIsVisible();
                    });

                    it('First row should be visible', () => {
                        new UsersPage().FirstRowIsVisible();
                    });

                    it('Applied Filters should be visible', () => {
                        new UsersPage().appliedFiltersIsVisible();
                    });

                    it('should contain text "Users"', () => {
                        new UsersPage().PageTitleHasText();
                    });

                    it('Applied Filters body should be visible', () => {
                        new UsersPage().appliedFiltersBodyIsVisible();
                    });

                    it('With selected dropdown should be visible', () => {
                        new UsersPage().withSelectedDropdownIsVisible();
                    });

                    it('Import button should be visible', () => {
                        new UsersPage().importButtonIsVisible();
                    });

                    it('Search bar should be visible', () => {
                        new UsersPage().searchBarIsVisible();
                    });

                    it('Search button should be visible', () => {
                        new UsersPage().searchButtonIsVisible();
                    });

                    it('should contain text "Users"', () => {
                        new UsersPage().PageTitleHasText();
                    });

                    it('Action header should be visible', () => {
                        new UsersPage().ActionHeaderIsVisible();
                    });

                    it('ID should be visible', () => {
                        new UsersPage().idIsVisible();
                    });

                    it('Access Group should be visible', () => {
                        new UsersPage().accessGroupIsVisible();
                    });

                    it('Username should be visible', () => {
                        new UsersPage().usernameIsVisible();
                    });

                    it('First Name should be visible', () => {
                        new UsersPage().FirstNameIsVisible();
                    });

                    it('Last Name should be visible', () => {
                        new UsersPage().LastNameIsVisible();
                    });

                    it('User Email should be visible', () => {
                        new UsersPage().UserEmailIsVisible();
                    });

                    it('User Status should be visible', () => {
                        new UsersPage().UserStatusIsVisible();
                    });
                });
            });
        });
    });
});
