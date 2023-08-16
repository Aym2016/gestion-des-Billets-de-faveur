/*import React, { Component } from "react";
import CompagnieAction from "../actions/CompagnieAction";

export default class Compagnie extends Component {
    constructor(props) {
        super(props);
        //this.onChangeTitle = this.onChangeTitle.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getCompagnie = this.getCompagnie.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateCompagnie = this.updateCompagnie.bind(this);
        this.deleteCompagnie = this.deleteCompagnie.bind(this);
    
        this.state = {
          currentCompagnie: {
            code: null,
            libelle: "",
            
          },
          message: ""
        };
      }
    
      componentDidMount() {
        this.getCompagnie(this.props.match.params.code);
      }*/
    
     /* onChangeTitle(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentCompagnie: {
              ...prevState.currentCompagnie,
              title: title
            }
          };
        });
      }*/
    
      /*onChangeDescription(e) {
        const description = e.target.value;
        
        this.setState(prevState => ({
          currentCompagnie: {
            ...prevState.currentCompagnie,
            description: description
          }
        }));
      }
    
      getCompagnie(code) {
        CompagnieAction.get(code)
          .then(response => {
            this.setState({
              currentCompagnie: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      updatePublished(status) {
        var data = {
          code: this.state.currentCompagnie.code,
          title: this.state.currentCompagnie.libelle,
          
          published: status
        };
    
        CompagnieAction.update(this.state.currentCompagnie.code, data)
          .then(response => {
            this.setState(prevState => ({
              currentCompagnie: {
                ...prevState.currentCompagnie,
                published: status
              }
            }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      updateCompagnie() {
        CompagnieAction.update(
          this.state.currentCompagnie.code,
          this.state.currentCompagnie
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The Compagnie was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    
      deleteCompagnie() {    
        CompagnieAction.delete(this.state.currentCompagnie.id)
          .then(response => {
            console.log(response.data);
            this.props.history.push('/compagnies')
          })
          .catch(e => {
            console.log(e);
          });
      }
      
      render() {
        const { currentCompagnie } = this.state;
    
        return (
          <div>
            {currentCompagnie ? (
              <div className="edit-form">
                <h4>Compagnie</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={currentCompagnie.libelle}
                      onChange={this.onChangeTitle}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <strong>Status:</strong>
                    </label>
                    {currentCompagnie.published ? "Published" : "Pending"}
                  </div>
                </form>
    
                {currentCompagnie.published ? (
                  <button
                    className="badge badge-primary mr-2"
                    onClick={() => this.updatePublished(false)}
                  >
                    UnPublish
                  </button>
                ) : (
                  <button
                    className="badge badge-primary mr-2"
                    onClick={() => this.updatePublished(true)}
                  >
                    Publish
                  </button>
                )}
    
                <button
                  className="badge badge-danger mr-2"
                  onClick={this.deleteCompagnie}
                >
                  Delete
                </button>
    
                <button
                  type="submit"
                  className="badge badge-success"
                  onClick={this.updateCompagnie}
                >
                  Update
                </button>
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Compagnie...</p>
              </div>
            )}
          </div>
        );
      }
    }*/
    
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompagnieAction from '../../actions/CompagnieAction';
class Compagnie extends Component {
    componentDidMount() {
        console.clear()
        console.log(this.props)
    }
    updateCompagnie() {
      CompagnieAction.update(
        this.state.currentCompagnie.id,
        this.state.currentCompagnie
      )
        .then(response => {
          console.log(response.data);
          this.setState({
            message: "The tutorial was updated successfully!"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  


    render() {
        return (
            <option value={this.props.id}>
                {this.props.libelle}
            </option>
        );
    }
}
Compagnie.propTypes = {
  product: PropTypes.object.isRequired
};
export default Compagnie;
