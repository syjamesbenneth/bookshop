// ./src/reducers/bookReducers.js
export default (state = [], action) => {
    switch (action.type){
      // Check if action dispatched is
      // CREATE_BOOK and act on that
      case 'CREATE_BOOK':
          state.push(action.book);
      default:
            return state;
    }
  };