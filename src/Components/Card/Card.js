import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  showDetails(){
    
  }

  render() {
    return (
        <div className="BaseCard">

            <div className="CardTop">
                <div className="JourneyHolder">
                    <div className="FromStart"> {this.props.from} </div>
                    <div className="ToDestination"> {this.props.to} </div>
                </div>

                <div className="StatusHolder">
                    <div className="IconHolder">

                    </div>
                    <div className="Greenness"></div>
                </div>
            </div>


            <div className="CardBottom">
                <div className="TotalTime"></div>
                <div className="Details" onClick={this.showDetails}>Details</div>
            </div>
        </div>
    );
  }
}

export default Card;