import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Public routes
  Route.group(() => {
    Route.post('/login', 'Api/V1/AuthController.create')
    Route.post('/registrations', 'Api/V1/RegistrationsController.store')
  })

  // Authenticated routes
  Route.group(() => {
    Route.delete('/logout', 'Api/V1/AuthController.destroy')
    Route.delete('/registrations', 'Api/V1/RegistrationsController.destroy')
  }).middleware('auth')
}).prefix('/api/v1')
