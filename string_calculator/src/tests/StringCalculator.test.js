import { Add } from "../components/StringCalculator";

test("should return 0 for an empty string", () => {
  expect(Add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  expect(Add("1")).toBe(1);
});

test("should return the sum of two numbers separated by a comma", () => {
  expect(Add("1,2")).toBe(3);
});

test("should return the sum of multiple numbers", () => {
  expect(Add("1,2,3,4")).toBe(10);
});

test("should handle new lines between numbers", () => {
  expect(Add("1\n2,3")).toBe(6);
});

test("should handle new lines only", () => {
  expect(Add("1\n2\n3")).toBe(6);
});

test("should support different delimiters", () => {
  expect(Add("//;\n1;2")).toBe(3);
});

test("should throw an exception for negative numbers", () => {
  expect(() => Add("1,-2,3")).toThrow("negatives not allowed: -2");
});

test("should ignore numbers greater than 1000", () => {
  expect(Add("2,1001")).toBe(2);
});

test("should support delimiters of any length", () => {
  expect(Add("//[***]\n1***2***3")).toBe(6);
});

test("should support multiple delimiters", () => {
  expect(Add("//[*][%]\n1*2%3")).toBe(6);
});

test("should support multiple delimiters with length longer than one char", () => {
  expect(Add("//[***][%%]\n1***2%%3")).toBe(6);
});
