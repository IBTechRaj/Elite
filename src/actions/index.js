import getId from "../utils/getId";

export const createSupplier = (name, hdNumber, hdMail) => ({
  type: "CREATE_SUPPLIER",
  id: getId(),
  name,
  hdNumber,
  hdMail
});

// export const removeBook = id => ({
//   type: 'REMOVE_BOOK',
//   id,
// });

// export const changeFilter = filter => ({
//   type: 'CHANGE_FILTER',
//   filter,
// });
