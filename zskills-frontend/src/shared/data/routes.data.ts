export class Routes {
  static HOME_PAGE = "/";
  static LOGIN_PAGE = "/login";
  static REGISTRATION_PAGE = "/registration";
  static PRICING_PAGE = "/pricing";
  static PROFILE_PAGE = "/profile";
  static COURSE_PAGE = (id: string) => {
    return "/course/" + id;
  };
}
