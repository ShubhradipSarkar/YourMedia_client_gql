import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions'

const Appa = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const newMessage = e.target.value;

    // Use regular expression to find mentions in the message
    const mentionRegex = /@(\w+)/g;
    const styledMessage = newMessage.replace(
      mentionRegex,
      (match) => `<span style="color: blue;">${match}</span>`
    );

    setMessage(styledMessage);
  };

  return (
    <div>
      <MentionsInput value={this.state.value} onChange={this.handleChange}>
  <Mention
    trigger="@"
    data={this.props.users}
    renderSuggestion={this.renderUserSuggestion}
  />
  <Mention
    trigger="#"
    data={this.requestTag}
    renderSuggestion={this.renderTagSuggestion}
  />
</MentionsInput>
    </div>
  );
};

export default Appa;
