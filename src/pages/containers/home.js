import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../../pages/components/related-layout';
// import Recomends from '../../recomends/components/recomends';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
    state = {
        modalVisible:  false,
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }

    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories
                        handleOpenModal={this.handleOpenModal}
                        categories={this.props.data.categories}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}>
                                <p>Hola Mundo</p>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;