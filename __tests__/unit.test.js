// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('isPhoneNumber returns true for phone number with area code in parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number with dashed area code', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number with dots', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

test('isPhoneNumber returns false for phone number with too few digits', () => {
  expect(isPhoneNumber('456-789')).toBe(false);
});

// isEmail tests
test('isEmail returns true for basic email', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('isEmail returns true for email with underscore in name', () => {
  expect(isEmail('first_last@ucsd.edu')).toBe(true);
});

test('isEmail returns false for email missing @', () => {
  expect(isEmail('student.example.com')).toBe(false);
});

test('isEmail returns false for email with invalid domain ending', () => {
  expect(isEmail('student@example.c')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for valid password with letters and numbers', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('isStrongPassword returns true for valid password with underscore', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword returns false when password starts with a number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('isStrongPassword returns false when password is too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate tests
test('isDate returns true for single digit month and day', () => {
  expect(isDate('1/2/2026')).toBe(true);
});

test('isDate returns true for two digit month and day', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('isDate returns false for date using dashes', () => {
  expect(isDate('12-25-2026')).toBe(false);
});

test('isDate returns false for two digit year', () => {
  expect(isDate('12/25/26')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for 3 character hex code with #', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for 6 character hex code without #', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('isHexColor returns false for invalid hex letters', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('isHexColor returns false for wrong length', () => {
  expect(isHexColor('#ffff')).toBe(false);
});