const initialState = window.user || {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.name,
        authorized: true
      }
    }

    default: {
      return state;
    }
  }
}
