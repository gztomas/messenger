import React from 'react';
import PropTypes from 'prop-types';
import { StyledScroller } from './styled';

class AutoScroller extends React.Component {
  constructor(props) {
    super(props);
    this.bottomRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.bottomRef.current) {
      this.bottomRef.current.scrollIntoView({
        block: 'end',
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <StyledScroller>
        {children}
        <div ref={this.bottomRef} />
      </StyledScroller>
    );
  }
}

AutoScroller.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AutoScroller;
