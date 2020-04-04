const initState = {
     helpProjects: [
          {id:'1', wayToHelp: 'get groceries for elderly neighbor', notes: 'Get their number emailed to me and get their list of items, deliver to them next day'},
          {id:'2', wayToHelp: 'get groceries for elderly neighbor', notes: 'Get their number emailed to me and get their list of items, deliver to them next day'},
          {id:'3', wayToHelp: 'get groceries for elderly neighbor', notes: 'Get their number emailed to me and get their list of items, deliver to them next day'},

     ]
}

const helpReducer = (state = initState, action) => {
     switch(action.type){
          case 'CREATE_HELP':
               console.log('created help', action.help)
               return state;
          case 'CREATE_HELP_ERROR':
               console.log('create help ', action.err);
               return state;
          default: 
               return state;
     }
}

export default helpReducer