const { repair, succeed, fail } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair", () => {
    //Repair needs to return a NEW item object with durability:100
    const item = {
      name: "item",
      enhancement: 5,
      durability: 10
    };

    it("should be an object with durability property equal to 100", () => {
      expect(repair(item)).toHaveProperty("durability", 100);
      expect(repair(item)).toHaveProperty("enhancement");
      expect(repair(item)).toHaveProperty("name");
    });
    const item2 = {
      name: "item",
      enhancement: 5,
      durability: 100
    };
    it("should be a new, identical object even if the durability is already 100", () => {
      expect(repair(item2)).toEqual(item2);
    });

    it.todo("passing non-object literals");
  });

  describe("succeed", () => {
    //Sucess accepts an item object and returns a new object modified according to the rules.
    //Item's enhancement increases by 1
    //If Item's enhancement level is 20, it's unch
    //Durability of item unch
    const item = {
      name: "item",
      enhancement: 5,
      durability: 10
    };
    it("should return a new object with +1 enhancement", () => {
      expect(succeed(item)).toHaveProperty("enhancement", 6);
    });
    const item2 = {
      name: "item",
      enhancement: 20,
      durability: 10
    };
    it("should not increase enhancement if it is already at 20", () => {
      expect(succeed(item2)).toHaveProperty("enhancement", 20);
    });
    it.todo("handle non-object inputs");
  });

  describe("fail", () => {
    //Fail accepts an item object and returns a new item object, adjusted according to following rules:
    //if enhancement < 15, durability of item - 5
    //if enhancement > 15, durability of item -10
    //if enhancement >16, enhancement -1
    const item1 = {
      name: "item",
      enhancement: 5,
      durability: 10
    };

    it("should decrease durability by 5 if enhacement is less than 15", () => {
      expect(fail(item1)).toHaveProperty("durability", 5);
    });

    const item2 = {
      name: "item",
      enhancement: 16,
      durability: 100
    };

    it("should decrease durability by 10 if enhancemnet is greater than 15", () => {
      expect(fail(item2)).toHaveProperty("durability", 90);
    });

    const item3 = {
      name: "item",
      enhancement: 17,
      durability: 100
    };

    it("should decrease enhancement by 1 if enhancement is greater than 16", () => {
        expect(fail(item3)).toHaveProperty("enhancement", 24);
    });
  });
});
