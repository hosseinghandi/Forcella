import { updateUserState } from "../utils/userStateTracker";
const handelSubmit = (section, newData, task) => {
    task((prev) => {
      const change = {
        ...prev,
        [section]: {
          ...newData,
        },
      };
      updateUserState(change);
      return change;
    });
    
  };

  export default handelSubmit