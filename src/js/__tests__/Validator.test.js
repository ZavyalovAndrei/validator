import { Validator } from "../Validator.js";

test.each([
  [true, "v_02-Xx-24_V"],
  [false, "_02-04-24_v"],
  [false, "v_02-04-24_"],
  [false, "v_0204-24_v"],
  [false, "v+02-04-24_v"],
  [false, "02-04-24_v"],
  [true, "V_02-04-24_v"],
  [false, "v+02-ШЙ-24_v"],
])(
  "should return %s with name value %s",
  (expected, userName) => {
const testValidator = new Validator;
    const result = testValidator.validateUsername(userName);
    expect(result).toEqual(expected);
  }
);