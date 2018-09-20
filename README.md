Store's state <== currentUser: {},
        userPrograms: [],
        restaurantsResults: [],
        eventsResults: [],
        currentProgram: {},
        currentRestaurant: {},
        currentEvent: {},
        currentSearchParams: {}

‘/signup’
SignUpForm <== username: '', password: ''

‘/login’
LogInForm <== username: '', password: ''

‘/‘ & ‘/users/:id’
Home
  SearchForm
  RestaurantsList
    Restaurant
  EventsList
    Event
	Map

‘/users/:id/programs’
MyPrograms
  ProgramsList
  	Program
  		Restaurant
  		Event
  Map

‘/users/:id/programs/:id’
ViewProgram
  SearchForm
  RestaurantsList
    Restaurant
  EventsList
    Event
  Map
