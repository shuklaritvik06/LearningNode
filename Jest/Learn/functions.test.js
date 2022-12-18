const { default: axios } = require("axios");
const functions = require("./functions");
class A {}

beforeEach(()=>console.log("Test Started"))
afterEach(()=>console.log("Test Ended"))

test("Add 1+2 equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});
test("Add 1+2 NOT equal 3", () => {
  expect(functions.add(1, 2)).not.toBe(3);
});
test("Not NUll", () => {
  expect(functions.isNull()).not.toBeNull();
});
test("is Null", () => {
  expect(functions.isNull()).toBeNull();
});
test("is Truth", () => {
  expect(functions.isTruth()).toBeTruthy();
});
test("is False", () => {
  expect(functions.isFalse()).toBeFalsy();
});
test("returning user", () => {
  expect(functions.addUser()).toEqual({
    name: "Ritvik",
    age: 20,
  });
});
test("Should be under 1200", () => {
  expect(functions.add(100, 100)).toBeLessThan(1200);
});
expect.extend({
  toBeWithNameRitvik(recieved) {
    if (recieved.name === "Ritvik") {
      return {
        message: () => "Expected name to be Ritvik",
        pass: true,
      };
    }
  },
});

test("Name is Ritvik", () => {
  expect(functions.addUser()).toBeWithNameRitvik();
});

test("No R in name", () => {
  expect(functions.addUser().name).toMatch(/R/);
});
test("Greater than 230", () => {
  expect(functions.add(200, 100)).toBeGreaterThan(230);
});
test("Admin in usernames", () => {
  usernames = ["Admin", "Ritvik"];
  expect(usernames).toContain("Admin");
});
test("Have Length 3", () => {
  usernames = ["Admin", "Ritvik", "Shreya"];
  expect(usernames).toHaveLength(3);
});
test("Have Property name", () => {
  expect(functions.addUser()).toHaveProperty("name");
});
test("Have Property address city", () => {
  expect(functions.addUser()).toHaveProperty("address.city", "Prayagraj");
});
test("promise resolves", () => {
  expect(
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
  ).resolves.toBeDefined();
});
test("palindrome string", () => {
  expect(functions.reverseString("heh")).toBe("heh");
});

describe("Instance of class",()=>{
    test("Instance of A",()=>{
        expect(new A()).toBeInstanceOf(A);
    })
})
// Array Match (agar expected array elements recieved me honge to pass hoga)

describe("arrayContaining", () => {
    const expected = ["Alice", "Bob"];
    it("matches even if received contains additional elements", () => {
      expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(expected));
    });
    it("does not match if received does not contain expected elements", () => {
      expect(["Bob", "Eve"]).not.toEqual(expect.arrayContaining(expected));
    });
});