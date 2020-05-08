import { submitHandler } from "./handler";

describe('Test, the function "submitHandler()" should exist', () => {
  test("It should return true", async () => {
    expect(submitHandler).toBeDefined();
  });
});

describe('Test, the function "submitHandler()" should be a function', () => {
  test("It should be a function", async () => {
    expect(typeof submitHandler).toBe("function");
  });
});
