
# ML-GB-frontend

[Url](https://enigmatic-forest-65615.herokuapp.com/)

This is the frontend react app for the challenge of consuming a get on board job api. You can search the jobs that hit the rails backend, view their details, and after you log in, you can favorite/unfavorite them.

### Deployment
Just use the normal steps to deploy to heroku, meaning heroku login, heroku create, but before pushing just note to add the buildpack:
`heroku buildpacks:set https://github.com/mars/create-react-app-buildpack`
This will prevent heroku to pushing the development build which is slow.


Note: For security while this exercise is evaluated, the backend for has the frontend herokU url hardcoded in CORS, so requests from another heroku app will fail. Later if this  repository is public the backend will allow any url or at least anything using heroku.

### View locally
Do a `yarn install`, then `yarn start`

### Run the End to End test
`yarn test` Will run the cypress test, BUT you need to have the app running at port 3000 with `yarn start` or the test will fail. You can view coverage results in /coverage/lcov-report. Requests are mocked so no backend servers will be hit.


### FAQ (Rationale for technical decisions)

#### Why create-react-app ?

It helps getting past webpack troubles to speed up development and there's many tutorials with it, it was fairly simple to find one for deploying to heroku.

#### Why hooks over classes ?

While the react docs claim that they will still support classes and don't seem to recommend one over the other, components look way slimmer and there's a lot less boilerplate. There some gotcha's though so I'd be very careful when refactoring an existing componenent, because some hooks have slight differences between lifecycle methods (For example useEffect vs ComponentDidUpdate).

#### Why the login? there's no auth in the backend

After asking for some clarification, the favorites feature had to be scoped to each user but at the same time 'You should be able to see your favorites in another browser' means we need to use something like an email as key. So the email is stored in a cookie, then sent to the backend in search requests/favoriting, then kept in storage unless you delete the cookie or 'logout'.

#### Why a context for the session? you can just pass it down.
The react docs state that context are great when you will require props for components
in different hierachies/levels, which is the case for the `UserArea` and `FavoriteButton` both requiring to know about session.

#### I saw from the commits the test were done at the end, why no TDD?

Before doing this I was only familiar with testing react through snapshot based testing, but since this started as a proof of concept with not styles, themes or anything, the snapsshots would change greatly, so I preferred to wait until the end when the UI/UX was more clear and I had researched a bit on cypress.

#### What's this cypress thing? where are the unit tests?
The requirement was to 'cover most of the scenarios' and here's the coverage of Cypress of the current end-to-end test:

![2R27Ob6.png](https://i.imgur.com/2R27Ob6.png)

Cypress is an UI testing tool for JS that makes simple testing react with a syntax similar
to jest examples, think capybara for JS, but supercharged; it even records videos and has a tool to inspect the current DOM to help choosing selectors for your test. This app's end to end test is in cypress/ingregation/app.spec.js and here's how it looks after a run:

![NcSDe0p.png](https://i.imgur.com/NcSDe0p.png)

Unit testing could be done using the new `act` api suitable for react hooks, but when only basic coverage is a requirement and time is finite, cypress is a great choice.

#### Why SemanticUI ? and what's wrong with that menu on Mobile.
After taking a look at SemanticUI-React (It was featured in a tutorial in the heroku blog) I liked the way the `Item` component worked. Mobile first and great UI/css wasn't a hard requirement this time, and at the end I guess I'm also another ['Fullstack Backend Developer'](http://www.commitstrip.com/en/2016/11/07/which-full-stack-developer-are-you/)


### TODO's
These are some pending tasks I'd work on If I had more time, but I'd prefer not to risk turning this in way too late just to tackle this which weren't formally required.

- Use react router rather than trying to code a 'show' route manually like I did which I thought would be easier and 'react router wasn't worth it this time'
- Fix the mobile experience.
- Add a small delay in the onChange event when typing on the search field, since it does too many ajax requests.
