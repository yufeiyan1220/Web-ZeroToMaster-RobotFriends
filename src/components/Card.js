import React, {Component} from 'react';

class Card extends Component {
  constructor(props, basicUrl, options) {
    super();
    this.props = props;
    this.basicUrl = basicUrl;
    this.options = options;
  }
  render() {
    return (
      <div className = 'tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' key = {"robot" + this.props['id']}>
        <img alt = "Profile" src={this.getImgURL(this.props['id'])}/>
        <div>
          <h3>{this.props['name']}</h3>
          <p>{this.props['email']}</p>
        </div>
      </div>
    );
  }
  getImgURL(id) {
    return this.basicUrl + id + this.options;
  }
}

export default Card;
