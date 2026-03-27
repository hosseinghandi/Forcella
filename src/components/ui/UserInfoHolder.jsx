// role: to do :
// A) render static user data as card
// B)render user data which is editable as inputs
import * as MUI from "../../barrels/MUI";
import * as UI from "../../barrels/UI";
import { useForm } from "react-hook-form";
import useRequestText from "../../hook/useRequestText";
import { useState, useEffect } from "react";
import useUpdateUser from "../../hook/useUserUpdate";
export default function UserInfoHolder({ editMode, setEditMode }) {
  const { updateProfile } = useUpdateUser();
  const { text, inputs } = useRequestText("profile");
  const listItems = text.listItems;
  const [toast, setToast] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: Object.fromEntries(
      inputs.map((input) => [input.name, input.placeholder]),
    ),
  });

  const onsubmit = (formData) => {
    updateProfile(formData);
    setToast(true);
    setEditMode(false);
  };
  // clean up each time you run the function
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const [showMore, setShowMore] = useState(false);
  const [delet, setDelet] = useState(false);

  return (
    <>
      {toast && <UI.SuccessfulAction toastMessage={text.toast} />}
      {/* change html semantic tag to handel the form */}
      <MUI.Box
        component={editMode ? "form" : "section"}
        onSubmit={handleSubmit(onsubmit)}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: { xs: "95vw", md: "70vw", lg: "95vw" },
          height: "fit-content",
          px: {
            xs: "calc(var(--spacing-global-padding-x-mobile) - 3vw)",
            md: "calc(var(--spacing-global-padding-x-tablet) - 2.5vw)",
            special: "calc(var(--spacing-global-padding-x-desktop) - 2.8vw)",
          },

          mt: { md: "2vw", xl: "0" },
          alignItems: { xs: "stretch", special: "flex-start" },
          gap: "calc(var(--GlobalgapOfGrids)*2)",
        }}
      >
        {/* personal info wrapper*/}
        <MUI.Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "calc(var(--GlobalgapOfGrids)/2)",
          }}
        >
          {!editMode ? (
            <UI.PersonalDetailsMaker list={listItems} />
          ) : (
            <UI.InputControllerGroup
              inputs={inputs}
              control={control}
              errors={errors}
            />
          )}
        </MUI.Box>
        {/* summery and submit wrapper */}
        <UI.OrderedDetailsMaker
          showMore={showMore}
          editMode={editMode}
          setDelet={setDelet}
          setShowMore={setShowMore}
          delet={delet}
        />
      </MUI.Box>
    </>
  );
}
