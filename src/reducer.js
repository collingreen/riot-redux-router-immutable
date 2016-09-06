var Immutable = require('immutable')
var actions = require('./actions')

module.exports = function(state, action) {
  state = state || Immutable.fromJS({ current_url: '' })

  switch(action.type) {
    case actions.ROUTER_ROUTE_CHANGED:
      return state.merge({current_url: action.data})
    default:
      return state
  }
}
