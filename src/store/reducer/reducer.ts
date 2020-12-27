import produce from "immer";

import { TEST, TestState } from "../type/type";
import { Action } from "../rootType";

const defaultState: TestState = {
  test: "",
};

export const reducer = (state = defaultState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TEST:
        draft.test = action.value;
        break;
    }
  });
