const React = require('react');

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = DefaultLayout;
