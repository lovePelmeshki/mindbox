//  Скрипт Google Apps Script для создания
//  нового пользователя в Google Workspace

    // используйте сервис AdminDirectory 

primaryEmail = 'love.pelmeshki@mindbox.com'
givenName = 'Alexey'
familyName ='Plisheshnikov'

function addUser() {
  var user = {
    primaryEmail: primaryEmail,
    name: {
      givenName: givenName,
      familyName: familyName
    },
    // Generate a random password string.
    password: Math.random().toString(36)
  };
    

  user = AdminDirectory.Users.insert(user);
  Logger.log('User %s created with ID %s.', user.primaryEmail, user.id);
}
