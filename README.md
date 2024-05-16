# ReactAuthJWTDemo

To get started with JWT authentication in .Net, you first need to add the following nuget package to your web.csproj file:

```
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="6.0.16" />
```

Then, you need to create a secret token in your `appsettings.json` file:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/appsettings.json#L13

Then, in your `Program.cs`, add the following:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/Program.cs#L13-L27

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/Program.cs#L44-L45

Then, when logging in a user, you'll be sending back a token instead of a `User` object like we did with Cookies:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/Controllers/AccountController.cs#L44-L54

Then, in order to get access to the currently logged in users email, you can do this:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/Controllers/AccountController.cs#L62

To only allow certain routes access to logged in users, we use the same `[Authorize]` attribute as we did with Cookies:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/Controllers/SecretController.cs#L9

On the React side of things, when a user is logging in, we now need to store the token in local storage:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/ClientApp/src/pages/Login.jsx#L16-L18

Then, we need to change the way we make requests when accessing APIs that need authentication. To do that, we can create our own `axios` instance:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/ClientApp/src/AuthAxios.jsx

And then use it like so:

https://github.com/litw11/ReactAuthJWTDemo/blob/master/ReactAuthJWTDemo.Web/ClientApp/src/pages/Secret.jsx#L11

What this does is that it sends along the token we got during log in (which we saved in local storage) via the Authorization header.
