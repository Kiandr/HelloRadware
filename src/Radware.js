import React from "react";
import Modal from 'react-modal';
import './App.css';
import './bootstrap.min.css';



class Radware extends React.Component {

  constructor(proprs){ 
    super(proprs);
     this.openModal = this.openModal.bind(this);
     this.handleModalCloseRequest = this.handleModalCloseRequest.bind(this);
     this.myTime = new Date().toISOString();
    //  this.value = this.value.bind(this);
    //  this.message = this.message.bind(this);
     
     
     //this.message = "";
     
    this.state = { modalIsOpen: true };
    this.state = { respondFromHost: proprs };
    this.state = { message: "start" };
    //this.time = new Date().toISOString();
  //   if (proprs === 'show'){
      
  //     alert('Radware says ' + proprs);
  //     this.value = proprs.toISOString;
  //     this.setState({modalIsOpen: true});

  // }
}
// adding get ajax using fetch 

componentDidMount() {
// var myHeaders = new Headers({
//   'method':'GET',
//   'Content-Type': 'JSON',
//   'Access-Control-Allow-Origin':'*',
//   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//   'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
//   'mode':'no-cors'
//   /** 
//    * 
//    *   res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");*/

// });
  fetch('http://localhost:8080',{headers: {  
  // 'method':'GET',
  // 'Content-Type': 'JSON',
  'Access-Control-Allow-Origin':'*',
  //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//  'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
  'mode':'no-cors'}
})
    .then(response => response.json())
    .then(data => {console.log(data.response);
      this.setState({message:data.response});
      this.setState({modalIsOpen: true});
      });
    //this.message = data.response;

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
          <ul>{this.myTime}</ul>
          <ul>{this.state.message}</ul>
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
             {this.state.message}
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

