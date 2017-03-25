import { browserHistory } from 'react-router';

export default function redirect(state = {}, action) {
  switch (action.type) {
    case 'REDIRECT': {
      browserHistory.push(action.path);

      return state;
    }

    default: {
      return state;
    }
  }
}
