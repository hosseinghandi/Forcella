const handleChange =
    (section = null, task) =>
    (e) => {
      const { name, value } = e.target;
      task((prev) =>
        section
          ? {
              ...prev,
              [section]: {
                ...prev[section],
                [name]: value,
              },
            }
          : { ...prev, [name]: value },
      );
    };

export default handleChange