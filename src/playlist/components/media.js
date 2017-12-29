import React, { PurComponent} from "react";
import PropTypes from "prop-types";
import "./media.css";


class Media extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount(){
        
    }
    handleClick = (event) => {
        // alert(this.props.image)
        this.setState({
            author: 'Ulala'
        })
    }
    render(){
        const { title, author, cover } = this.props;

        const styles = {
            container: {
                fontSize: 14,
                width: 240,
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
                        src={cover}
                        alt=""
                        className="Media-image"
                        width={240}
                        height={160}
                        />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
};

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title:  PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}

export default Media;