var learning = React.createClass({ displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: 'commentBox'},
        "Hello world!"
      )
    );
  }
});

React.render(
  React.createElement(learning, null),
  document.getElementById('example')
);

