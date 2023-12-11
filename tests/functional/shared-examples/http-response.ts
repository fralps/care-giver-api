export const status = (response, status: number) => {
  response.assertStatus(status)
}

export const json = (response) => {
  response.assertHeader('content-type', 'application/json; charset=utf-8')
}

export const cookies = (response) => {
  response.assertCookie('care-giver-session-development')
}
