import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Authentication routing
  Route.post('/login', 'Api/V1/AuthController.create')
  Route.delete('/logout', 'Api/V1/AuthController.destroy').middleware('auth')

  // Registration routing
  Route.post('/registrations', 'Api/V1/RegistrationsController.store')
  Route.delete('/registrations', 'Api/V1/RegistrationsController.destroy').middleware('auth')
}).prefix('/api/v1')
