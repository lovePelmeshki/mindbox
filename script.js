function addUser() {
    var user = {
      primaryEmail: 'love.pelmeshki@mindbox.com',
      name: {
        givenName: 'Alexey',
        familyName: 'Plisheshnikov'
      },
      // Generate a random password string.
      password: Math.random().toString(36)
    };
    user = AdminDirectory.Users.insert(user);
    Logger.log('User %s created with ID %s.', user.primaryEmail, user.id);
  }
