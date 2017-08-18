const main = require('../../main/try');
describe("Person", () => {
    it("should call teacher's addended member event, when a student is appended to teach" +
      "er's own classes",() => {
    spyOn(console, 'log');
    main()
    expect(console.log).toHaveBeenCalledWith("qqq");
  });
}
