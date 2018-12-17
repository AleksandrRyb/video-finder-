import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''  };

  componentWillMount(){
      document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount(){
      document.addEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) => {
      if(this.node.contains(e.target)){
        this.onClickChange(true)
      } else {
        this.onClickChange(false)
      }
  }

  onClickChange(bool){
    this.props.onToggler(bool)
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
    this.props.predict(event.target.value)
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment"  ref={node => this.node = node}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
