import React from 'react';

const Topic = ({ match }) => (
  <div className="topic-block">
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
