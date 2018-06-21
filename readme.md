#  Podii Official Website

This is the official [Podii](https://podiihq.com) website made using [Foundation for Sites](http://foundation.zurb.com/sites). The following technologies are used to build it

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Issue tracking
We use waffle to manage issues for this website. You can request access to [the waffle board](https://waffle.io/Podiihq/podiihq)
## Installation

To contribute, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)


### Setup

1. You need to first of all clone the project to your own github repository
2. Clone your repository into your local computer

```bash
git clone https://github.com/<yourname>/<project name>
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd <projectname>
npm install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
