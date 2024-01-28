interface User {
    name: string
}

function teste(user: User) {
    console.log(user.name);
}

teste({ name: 'novo' });