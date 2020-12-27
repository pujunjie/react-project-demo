import { TEST, SAGA_TEST } from "../type/type";

export const getTestAction = () => {
  return {
    type: TEST,
    value: "test",
  };
};

export const getSagaTestAction = () => {
  return {
    type: SAGA_TEST,
  };
};
