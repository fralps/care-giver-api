import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'Api/V1/AuthController.create')
  Route.delete('/logout', 'Api/V1/AuthController.destroy')
}).prefix('/api/v1')
