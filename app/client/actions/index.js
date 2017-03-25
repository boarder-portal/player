export function login(name, redirectPath) {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: 'SET_NAME',
        name
      });

      dispatch(redirect(redirectPath));
    }, 500);
  };
}

export function redirect(path) {
  return {
    type: 'REDIRECT',
    path
  }
}

