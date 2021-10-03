# Carberra Tutorials Website

The repo for the Carberra Tutorials website.

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Overview](#overview)
  - [Packages](#packages)
  - [Helpers](#helpers)
  - [Storybook Addons](#storybook-addons)
  - [Markdown Plugins](#markdown-plugins)
- [Structure](#structure)
  - [Source Structure](#source-structure)
  - [Public Structure](#public-structure)
  - [Script Structure](#script-structure)
- [Branches](#branches)
- [Development](#development)
  - [Running Storybook](#running-storybook)
- [Production](#production)
  - [Running Next JS](#running-next-js)
  - [Running Next JS (Automatically)](<#running-next-js-(automatically)>)
  - [Running Plausible](#running-plausible)
    - [First Time Only](#first-time-only)
    - [Every Time](#every-time)
- [Questions](#questions)

## Tech Stack

This contains all of the information and specifics on the tech stack that the project uses.

### Overview

| Item            | Value              | Version        |
| --------------- | ------------------ | -------------- |
| Language        | Typescript         | 4.3.2          |
| Package Manager | Yarn               | 1.22.10        |
| Server          | Node.JS            | 14.15.3        |
| Framework       | Next JS (React)    | 11.1.0         |
| Preview         | Storybook          | 6.4.0-alpha.18 |
| CSS Processor   | PostCSS            | 8.3.0          |
| Analytics/Stats | Plausible          | 1.3.0          |
| API             | Next JS API Routes | 11.1.0         |

### Packages

| Name                       | Version         | Use                                               |
| -------------------------- | --------------- | ------------------------------------------------- |
| Tailwind CSS               | 2.1.4           | Styling from HTML via classes                     |
| Axios                      | 0.21.1          | API requests                                      |
| Material UI (core & icons) | 4.12.2 & 4.11.2 | Nice, pre-made components to speed up development |
| Node Mailer                | 6.6.3           | Send emails for contact form                      |
| React Markdown             | 7.0.0           | Render markdown on pages                          |
| SASS                       | 1.34.1          | Use SASS/SCSS for styling                         |
| Babel (core)               | 7.14.3          | Part of Storybook                                 |

### Helpers

| Name                          | Version | Use                                  |
| ----------------------------- | ------- | ------------------------------------ |
| Babel Loader                  | 8.2.2   | Part of storybook                    |
| SVGR/Webpack                  | 5.5.0   | Loading svgs via webpack             |
| PostCSS Loader                | 4.2.0   | Load PostCSS in Storybook            |
| SASS Loader                   | 10.1.1  | Load SASS in Storybook               |
| TSConfig Paths Webpack Plugin | 3.5.1   | Support TS path aliases in Storybook |
| Auto Prefixer                 | 10.2.6  | PostCSS plugin to add CSS prefixes   |

### Storybook Addons

| Name                         | Version        | Use                                          |
| ---------------------------- | -------------- | -------------------------------------------- |
| Actions, Essentials, Links   | 6.4.0-alpha.18 | Automatically installed with Storybook       |
| PostCSS                      | 2.0.0          | Allow for loading of PostCSS                 |
| Builder, Manager (Webpack 5) | 6.4.0-alpha.18 | Use Webpack 5 to be consistent with main app |
| Theming                      | 6.4.0-alpha.18 | Add dark mode (essential)                    |

### Markdown Plugins

| Name        | Version | Use                                                |
| ----------- | ------- | -------------------------------------------------- |
| Remark GFM  | 2.0.0   | Add GitHub style markdown support (such as tables) |
| Remark Slug | 7.0.0   | Add linking to markdown headers                    |
| Rehype Raw  | 6.0.0   | Process HTML tags within markdown                  |

## Structure

| Directory           | Description                                |
| ------------------- | ------------------------------------------ |
| [src](src/)         | Main codebase                              |
| [public](public/)   | The files that are publicly accessable     |
| [scripts](scripts/) | Scripts to help with various related tasks |

#### Source Structure

| Directory               | Description                   |
| ----------------------- | ----------------------------- |
| [pages](src/pages/)     | Source for pages              |
| [styles](src/styles/)   | Source for custom styling     |
| [ui](src/ui/)           | Source for ui components      |
| [stories](src/stories/) | Source for storybook previews |

#### Public Structure

| Directory                  | Description               |
| -------------------------- | ------------------------- |
| [brand](public/brand/)     | Holds brand assets        |
| [favicon](public/favicon/) | Holds favicon assets      |
| [fonts](public/fonts/)     | Holds font files          |
| [icons](public/icons/)     | Holds icons for home page |

#### Script Structure

| Directory           | Description                                   |
| ------------------- | --------------------------------------------- |
| [bin](scripts/bin/) | Scripts for automation that are added to path |

## Branches

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| main    | What is running on the server — **DON'T TOUCH** |
| develop | Where changes/development occurs                |

## Development

Instructions for development/getting a development enviornment setup.

- Make sure you have the correct Node.JS and Yarn versions installed.
- Run `yarn` in top folder to install packages from `package.json`.
- Start the development server by running `yarn dev`.
- Open http://localhost:3000 (dev server) in your browser.

#### Running Storybook

- Follow the above steps first
- Start storybook by running `yarn storybook`.
- Open http://localhost:6006 (storybook server) in your browser.

## Production

To run the app in production, you will need to use docker and docker-compose to
run both the Plausible server as well as the Next JS server. Folders for the servers
should also be cloned into `/var/www/`.

#### Running Next JS

Run the following commands from the top folder (this one). Also, if another
version is already running, make sure to stop that container first.

- Build docker image: `docker build . -t carberra/website:<build version>`
- Run docker image: `docker run -p 3000:3000 --name carberra-website --rm -d carberra/website:<build version>`

#### Running Next JS (Automatically)

If you would like to run a single command to build and relaunch the docker container,
you can use the `build-and-deploy` script which should be in path (if you ran `setup.sh`
when you were setting it up). All you have to pass into the `build-and-deploy` script is
a version (eg. `v1.0.0`) and it should handle the rest for you.

#### Running Plausible

Run the following commands from the Plausible hosting folder (the one cloned below).

##### First Time Only

- Clone hosting repo: `git clone https://github.com/plausible/hosting plausible`
- Fill in info in `plausible-conf.env` (admin creds, etc).
  - Generate secket key to put in `SECRET_KEY_BASE` by running `openssl rand -base64 64`
- Run the commands below under the every time header
- Verify all users: `docker exec plausible_plausible_db_1 psql -U postgres -d plausible_db -c "UPDATE users SET email_verified = true;"`

##### Every time

- Build and start required images: `docker-compose up -d`

## Questions

If there are any questions, please get in contact with Parafoxia or MrDogeBro for help.
