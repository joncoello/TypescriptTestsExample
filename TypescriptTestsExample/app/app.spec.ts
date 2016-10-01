/// <reference path="../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="app.ts" />

describe("app", () => {

    var app: App;

    beforeEach(() => {
        app = new App();
    });


    it("should create", () => {
        expect(true).toBe(true);
    });

    it("title should be set", () => {
        expect(app.title).toBe("Hello World");
    });

    //it("should concatenate first and last names", () => {
    //    expect(person.getFullName()).toBe("Joe, Smith");
    //});

    //it("should concatenate first and last names - incorrect", () => {
    //    expect(person.getFullName()).not.toBe("Joe, Doe");
    //});

    //it("should concatenate lastname first", () => {
    //    expect(person.getFullName(true)).toBe("Smith, Joe");
    //});

    //it("should not concatinate firstname first", () => {
    //    expect(person.getFullName(true)).not.toBe("Joe, Smith");
    //});

});