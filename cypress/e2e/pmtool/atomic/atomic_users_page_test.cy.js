import { HeaderSection } from "../../../page-objects/pmtool/header_sections";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { MenuSection } from "../../../page-objects/pmtool/menu_sections";
import { NewUserFormModal } from "../../../page-objects/pmtool/new_user_form_modal";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe('Atomic users page tests', () => {
    beforeEach(() => {
        const username = Cypress.env("pmtool_username");
        const password = Cypress.env("pmtool_password");
        new LoginPage()
            .openPmtool()
            .typeAdminUserName()
            .typeAdminPassword()
            .clickLogin();

        new MenuSection().clickUsers();
    });

    context('Page title test', () => {
        it('should contain text "Users"', () => {
            new UsersPage().PageTitleHasText();
        });
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

            context('Applied Filter tests', () => {
                it('Applied Filters should be visible', () => {
                    new UsersPage().appliedFiltersIsVisible();
                });

                it('Applied Filters body should be visible', () => {
                    new UsersPage().appliedFiltersBodyIsVisible();
                });

                context('Add user button test', () => {
                    it('Add user button should be visible', () => {
                        new NewUserFormModal().addUserButtonIsVisible();
                    });

                    context('With selected dropdown test', () => {
                        it('With selected dropdown should be visible', () => {
                            new UsersPage().withSelectedDropdownIsVisible();
                        });

                        context('Import button test', () => {
                            it('Import button should be visible', () => {
                                new UsersPage().importButtonIsVisible();
                            });

                            context('Search bar test', () => {
                                it('Search bar should be visible', () => {
                                    new UsersPage().searchBarIsVisible();
                                });

                                context('Table header test', () => {

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
            });
        });
    });
});