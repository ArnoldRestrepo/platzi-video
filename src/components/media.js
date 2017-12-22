import React, {Component} from "react";
import PropTypes from "prop-types";
import "./media.css";


class Media extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (event) => {
        // alert(this.props.image)
        this.setState({
            author: 'Ulala'
        })
    }
    render(){
        const { title, image } = this.props;

        const styles = {
            container: {
                fontSize: 14,
                width: 260,
                border: '1px solid red',
                // padding: 10,
                fontFamily: 'arial, sans-serif',
                color: '#44546B',
                cursor: 'pointer'
            }
        }
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                        src={image}
                        alt=""
                        className="Media-image"
                        width={260}
                        height={160}
                        />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
};

Media.propTypes = {
    image: PropTypes.string.isRequired,
    title:  PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}

export default Media;