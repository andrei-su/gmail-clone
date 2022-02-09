# gmail-clone
 This is a Gmail clone written in React

Specify your site in firebase.json
Add your site ID to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.

{
  "hosting": {
    "site": "g-mail-clone09",

    "public": "public",
    ...
  }
}
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

firebase deploy --only hosting:g-mail-clone09
After deploying, view your app at g-mail-clone09.web.app

Need help? Check out the Hosting docs