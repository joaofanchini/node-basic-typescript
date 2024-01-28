interface User {
  name: string
}

function teste (user: User): void {
  console.log(user.name)
}

teste({ name: 'no' })
