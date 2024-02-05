export const authResponse = (token, user) => {
  return { access_token: token, username: user.username, role: user.role };
};

export class FilterQueryBuilder {
  private filter: any;
  private object;
  constructor(object) {
    this.filter = {};
    this.object = object;
  }
  addFilter(property: string) {
    if (this.object[property] && this.object[property] !== 0) {
      this.filter[property] = parseFloat(this.object[property]);
    }
  }

  build() {
    return this.filter;
  }
}
