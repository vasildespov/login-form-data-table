# Login form and data table

## Summary

This is my solution for Task: Build a Responsive Login Form with Data Table.

**Notes:**

- Implemented a very simple login/logout functionality just for the sake of the task using dummyjson https://dummyjson.com/docs/users#users-login. for example you could login with: (username: emilys, password: emilyspass). This is not something that I would do in production or in a more serious app because it is not recommended for security reasons.
- Handled navigation, redirects and protected routes via react-router loaders & actions.
- For the /table data I implemented a simple localStorage cache with time-based invalidation for each request. - `services/cache.ts`
- The data table component features basic url-based pagination.
- For the connectivity notification feature I implemented a hook that listens to the online and offline window events. In order for the image in the modal to load when the user goes offline I base64 encoded it because I figured that would be the easist solution.
- For the user interface I utilised ShadCN and TailwindCSS.
