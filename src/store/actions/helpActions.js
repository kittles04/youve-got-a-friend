export const createHelp = (help) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("Help")
      .add({
        ...help,
        authorFirstName: "Chloe",
        authorLastName: "Walker",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_HELP", help });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_HELP_ERROR", err });
      });
  };
};
