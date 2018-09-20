App <== currentUser: {},
        userPrograms: [],
        restaurantsResults: [],
        eventsResults: [],
        currentProgram: {},
        currentRestaurant: {},
        currentEvent: {},
        searchParams: {}

‘/signup’
SignUpForm <== username: '', passowrd: ''

‘/login’
LogInForm <== username: '', passowrd: ''

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
