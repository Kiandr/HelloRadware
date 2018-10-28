import React from "react";
import Modal from 'react-modal';
import './App.css';
import './bootstrap.min.css';



class Radware extends React.Component {

  constructor(proprs){ 
    super(proprs);
     this.openModal = this.openModal.bind(this);
     this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
     this.closeModal = this.closeModal.bind(this);
        
    
    this.state = { modalIsOpen: true };
    //this.time = new Date().toISOString();
  //   if (proprs === 'show'){
      
  //     alert('Radware says ' + proprs);
  //     this.value = proprs.toISOString;
  //     this.setState({modalIsOpen: true});

  // }
}

   openModal = () => {
   // this.state = { modalIsOpen: true };
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  }

  handleSaveClicked = (e) => {
    alert('Save button was clicked');
  }
  render() {
    
    return(
      <div className="resultToRadware">
          <p>
           Radware say "Show" was resolved succesfully at following time!
          </p>
          <ul>{this.time}</ul>
          <ul>{this.value}</ul>
          <div className="static-modal-Kian">
          
          <div>
       



 {/* <button type="button" className="btn btn-primary" onClick={this.openModal}>Open Modal</button> */}
        <Modal
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Hello Radware!</h4>
              <button type="button" className="close" onClick={this.handleModalCloseRequest}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
            Hello Radware!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.handleModalCloseRequest}> Hide Alert</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Take this action</button>
            </div>
          </div>
        </Modal>

          
          
          
          </div>
          </div>
          </div>
        
    );
  }
}
export default Radware;

