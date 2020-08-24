# Adventure Logger

## Description:

- The finished version of the Adventure Logger application will provide Dungeon Masters a place to store notes and key campaign information in an easy and accessible platform.

## Planning:

- The development phase of my project started with breaking it down into its base necessities. First, I'd have to build a backend database to store both my user's information and the resources they'd be interfacing with. Once the API was developed, I'd run curl-scripts to ensure that both my authicatoion and resource CRUD actions could be used successfully.

- From there I'd move on to the front-end or client-side of of development. The front-end server would require a user to register through an authenticated route in order to interface with basic CRUD actions that would be displayed via HandleBars.

## User Stories:

* As a new user I want to be able to create an account.

* As a user I want to be able to sign into my account.

* As a user I want to be able to sign out of my account.

* As a user I want to be able to change my password.

* As a user I want to be able to search for resources

* As a user I want to be able to search for specific resources.

* As a user I want to be able to add to resources.

* As a user I want to be able to edit resources.

* As a user I want to be able to remove resources.

* As a user I don’t want non-users to be able to see the resources.

## Unsolved Problems:

- Users still can't edit a resource as, when they attempt to save their alterations the web application refreshes.
- The alert message for when a user interfaces with the web app fails to display the correct message when a user attempts to display, delete, or create a new resource.
- Dispalyed resources do not return to a hidden state for an authorized user upon signing out.

## Technlologies Used:

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- HandleBars
- Modals

## Wireframe and ERD:

https://imgur.com/a/neWqJAI

## Important Links:

[API Repo](https://github.com/Dave-92-stack/dnd-api)
[Deployed API](https://serene-sea-61439.herokuapp.com/)
[Client Repo](https://github.com/Dave-92-stack/dnd-client)
[Deployed Client](https://dave-92-stack.github.io/dnd-client/)
