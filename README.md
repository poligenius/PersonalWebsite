# Personal Website

See: [mmarini.it](https://mmarini.it).

My personal website. An [MIT](https://github.com/poligenius/PersonalWebsite/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Adapting this Project

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below and review **detailed notes and a checklist on adapting this project [here](./docs/adapting-guide.md)**. Please feel free to reach out to me by filing an issue or emailing me at [poligeniushelp@gmail.com](mailto:poligeniushelp@gmail.com) for help configuring your project.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/poligenius/PersonalWebsite.git # replace [poligenius] with your github username if you fork first.
cd personal-site
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.

## Donations

The code is here for you to be read, edited, modified, reused, for free, do whatever you want!
However, if you'd like to [offer me](https://paypal.me/MarcoMariniING?country.x=IT&locale.x=it_IT) a coffee or a beer then cheers! xD

## Acknowledgements

* Full acknowledge goes to [@mldangelo](https://github.com/mldangelo) I have used great part of his template and his code which was really well made and easy to read, however I wanted to add to the site my own twist making edits like the gallery, colors and resume download option. I future probably I will add other stuff, for this reason I have published the site on my own repo.
* Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).

