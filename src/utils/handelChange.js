const handleChange =
    (section, subSection = null, task) =>
    (e) => {
      const { name, value } = e.target;
      task((prev) => {
              const updatedState = subSection ? 
            // if subsection => 
            // go to find (main section) and (extend it) 
            // , then (find the subsction ), 
            // (find the key) and (rewrite it)
            { 
              ...prev[section],
              [subSection] : {
                ...prev[section][subSection],
                [name]: value
              }
            }
            :
            // if there is no subsection 
            // go to the (main section) and (extend it )
            // (find the key) and (rewrite it)
            {
              ...prev[section],
                [name] : value
              }

              console.log(updatedState)
              // extend teh whole object and (apply the changes) to that (main section) which is asked
              return {...prev, [section]: updatedState }
            })
          }

export default handleChange
