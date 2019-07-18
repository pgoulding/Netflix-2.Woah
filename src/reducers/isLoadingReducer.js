export const isLoadingReducer = (state = false, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'IS_LOADING':
      return payload.isLoading;
    default:
      return state;
  }
}