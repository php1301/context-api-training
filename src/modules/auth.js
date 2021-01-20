export function authenticate (email, password) {
  // Make request to auth endpoint if this was for real, but it's not :)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Phuc Pham',
        dateOfBirth: '13/01/2001',
        email: 'devnight@gmail.com',
        secretQuestion: 'Joji?',
        secretAnswer: 'Mr.Hollywood'
      })
    }, 2500)
  })
}
