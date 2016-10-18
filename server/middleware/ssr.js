const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const isDev = process.env.NODE_ENV === 'development';

require('babel-register')();

const config = {
  styles: ['/build/style.css'],
  scripts: isDev ? ['/build/bundle.js'] : ['/bundle.js'],
}

/**
 * base html template
 */
function getMarkup(reactElement, store, assets) {
  const markup = ReactDOMServer.renderToString(reactElement);
  const initialState = store.getState();
  const scripts = assets.scripts.reduce((str, path) => `${str}<script src="${path}"></script>\n`, '');
  const stylesheets = assets.styles.reduce((str, path) => `${str}<link rel="stylesheet" href="${path}"></link>\n`, '');
  const tpl = fs.readFileSync(path.join(process.cwd(), 'template', 'index.html'), 'utf8');

  return [
    { key: '%HEAD%', value: `<script>window.__STORE__ = ${JSON.stringify(initialState)};</script>\n${stylesheets}` },
    { key: '%MARKUP%', value: markup },
    { key: '%BODY_SCRIPT%', value: scripts},
  ].reduce((str, current) => str.replace(current.key, current.value), tpl);
}

module.exports = (req, res) => {
  const ReactRouter = require('react-router');
  const match = ReactRouter.match;
  const RouterContext = React.createFactory(ReactRouter.RouterContext);
  const Provider = React.createFactory(require('react-redux').Provider);
  const routes = require('../../src/routes').default;
  const configureStore = require('../../src/store/configure-store').default;

  // XXX: prefetch
  const initialState = {
  };

  const store = configureStore(initialState);

  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.send(getMarkup(Provider({ store: store }, RouterContext(renderProps)), store, config));
    } else {
      res.status(404).send('Not found')
    }
  });
};
