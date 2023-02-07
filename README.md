# Project: Facespace!

## Setup

This repository contains a frontend and a backend folder. This means that each folder is a complete environment (`package.json`, `/node_modules`). They are completely independent. You cannot reference code from one environment in the other environment.

Generally speaking, the frontend will query the backend via calls to the server endpoints.

### The Frontend

1. Open a terminal in VS Code
2. Type `cd frontend`
3. Type `yarn install`

Use `yarn dev:frontend` to start the frontend dev environment.

### The Backend

1. Open _another_ terminal in VS Code
2. Type `cd backend`
3. Type `yarn install`

Use `yarn dev:backend` to start the backend dev environment.

## File Structure

```
├── _screenshots
├── backend
    ├── data
    |   └── users.js (where our data is stored)
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── handlers.js (functions that are called by the endpoints)
    ├── package.json (where we keep a record of the app setup)
    ├── server.js
    ├── utils.js (utility functions used by the BE)
    └── yarn.lock ("locks" the dependency versions)
├── frontend
    ├── public
    ├── src
    ├── node_modules (where all external dependencies are saved)
    |   ├── ...
    |   └── ...
    ├── package.json (where we keep a record of the app setup)
    └── yarn.lock ("locks" the dependency versions)
├── .gitignore
├── .prettierrc
└── README.md (this file)
```

## About the Data

There is a file `backend/data/users.js` that contains an array of `user`s. Each user looks like this.

```js
{
  id: '1008',
  name: 'Fletcher',
  friends: ['1006', '1007', '1009'], // array of the ids of user's friends
  avatarUrl: '/images/profile-pics/000003.jpg',
},
```

---

## The Project

This is described as a _mini_-project because it does not come with all of the guidance and step-by-step help that is usually provided in a workshop.

We do provide you with a lot of stuff from the start but it will require becoming familiar with the code.

### The Backend (server)

The server is done. It is functional and will reliably provide your FE with the `req`uested data as long as the the requests are made in a way that the server expects.

For more information on querying the server and what responses from the server will look like, read the [API_doc](backend/API_doc.md).

## The Design

The design is provided in the screenshots below and the theme colors and basic variables are added as CSS variables in `frontend/src/components/GlobalStyles.js`

```css
:root {
  --primary-color: #cc5500;
  --accent-bg-color: rgba(204, 85, 0, 0.1);
  --page-horizontal-padding: 20px;
  --header-height: 50px;
  --max-content-width: 1200px;
  --heading-font-family: "Teko", sans-serif;
}
```

You can use these variables in any of your styled-components by calling `var()` and passing it the name of the variable, like so:

```css
h1 {
  color: var(--primary-color);
}
```

## The Frontend

The entire build of the FE is up to you. 

## Screenshots

### Homepage

![homepage_3](https://user-images.githubusercontent.com/91036770/217148808-60b3c477-cf0b-4477-9610-c5b6df627f5e.png)


### The Profile Page

![profile_3](https://user-images.githubusercontent.com/91036770/217149000-bf6e1e26-124b-493a-9d74-83a878c0908d.png)


### The Sign in page

![signin_2](https://user-images.githubusercontent.com/91036770/217149032-f2c19575-d603-4328-bc41-5e294180dd27.png)


### A link to the signin page in the header

We should have a link to the signin page in the header.

![signin_signedin](https://user-images.githubusercontent.com/91036770/217149170-bfd4d67a-fe7e-4de1-9519-f32a46f9ea79.png)


When the user is signed in, the "sign in" link should be replaced by a greeting and the user's name.

![signin_signedin](https://user-images.githubusercontent.com/91036770/217149170-bfd4d67a-fe7e-4de1-9519-f32a46f9ea79.png)

While you're in the header, it would be good to turn the title into a link to the homepage.

### Faces on the homepage

- Faces on the homepage should link to that person's profile page.
- Let's also add a little UX tweak on hover. Give the image some sort of effect on hover.

![home-links (1)](https://user-images.githubusercontent.com/91036770/217149236-a951fe60-754e-42a6-bc7b-ce4719f5e3a3.gif)

### My Friends!

When a user is signed in and looking at the homepage, it would be great if there were some visual indication as to who their friends are in the grid of faces. My example is a ribbon on the image, but feel free to do whatever you like.

![homepage_4](https://user-images.githubusercontent.com/91036770/217149299-e9ef7bb8-fa8f-4b13-879e-33b74f9c10b4.png)

### No Sign in for you!

If someone is already signed in, they should not be able to see the signin page. Prevent this from happening.
