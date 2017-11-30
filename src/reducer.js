var Immutable = require('immutable')
var actions = require('./actions')

module.exports = function(state, action) {
  state = state || Immutable.fromJS({
    current_url: '',
    previous_url: '',
    currentUrl: '',
    previousUrl: ''
  })

  switch(action.type) {
    case actions.ROUTER_ROUTE_CHANGED:
      var currentUrl = action.data
      var previousUrl = state.get('currentUrl')
      return state.merge({
        // snake_case versions deprecated for camelCase
        current_url: currentUrl,
        previous_url: previousUrl,
        currentUrl: currentUrl,
        previousUrl: previousUrl
      })
    default:
      return state
  }
}
