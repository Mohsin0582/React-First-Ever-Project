import React, {Component} from 'react';
import axios from 'axios';

class ContactPageForm extends Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            phoneNumber:'',
            address:'',
            gender:'',
            shortBio: '',
            hasError:false
        }

        this.onClickName=this.onClickName.bind(this);
        this.onClickPhoneNumber=this.onClickPhoneNumber.bind(this);
        this.onClickAddress=this.onClickAddress.bind(this);
        this.onClickGender=this.onClickGender.bind(this);
        this.onClickShortBio=this.onClickShortBio.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    

    onClickName(e){
        if(e.target.value.match(/^[a-zA-Z0-9]*)$/)){
            this.setState({hasError:false, name: e.target.value});
        }else{
            this.setState({hasError:true});
            alert("error");
        }
       // this.setState({
        //    name: e.target.value
    //    });
    }
    onClickPhoneNumber(e){
        this.setState({
            phoneNumber: e.target.value
        });
    }
    onClickAddress(e){
        this.setState({
            address: e.target.value
        });
    }
    onClickShortBio(e){
        this.setState({
            shortBio: e.target.value
        });
    }
    onClickGender(e){
        this.setState({
            gender: e.target.value
        });
    }

    

    onSubmit(e){
        e.preventDefault();

        console.log(`Name: ${this.state.name}`)
        console.log(`Phone Number: ${this.state.phoneNumber}`)
        console.log(`Address: ${this.state.address}`)
        console.log(`Gender: ${this.state.gender}`)
        console.log(`Short Bio: ${this.state.shortBio}`)

        

        const newContactInformation={
            name: this.state.name,
            phoneNumber:this.state.phoneNumber,
            address:this.state.address,
            gender:this.state.gender,
            shortBio: this.state.shortBio
        }

        
        
            axios.post('http://localhost:3000/contacts', newContactInformation)
            .then( res => console.log(res.data))
            .catch(function(error){ console.log(error)});
        

        this.setState({
            name: '',
            phoneNumber:'',
            address:'',
            gender:'',
            shortBio: ''
        });

        
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                        <h5> Add New Contact</h5>
                    </div>
                    <br></br>
                        <form className="form-inline" action="" onSubmit={this.onSubmit}>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label for="name">Name:</label>
                                    <br></br>
                                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onClickName} name="name" />
                                </div>
                                
                                <div className="form-group">
                                    <label for="phoneNumber">Phone Number:</label>
                                    <br></br>
                                    <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.onClickPhoneNumber} name="phoneNumber" />
                                </div>
                                <div className="form-group">
                                    <label for="address">Address:</label>
                                    <br></br>
                                    <input type="text" className="form-control" id="address" value={this.state.address} onChange={this.onClickAddress} name="address" />
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label"><input type="radio" id="male" value="Male" checked={this.state.gender==='Male'} onChange={this.onClickGender} name="male" />Male</label>
                                        <label className="form-check-label"><input type="radio" id="female" value="Female" checked={this.state.gender==='Female'} onChange={this.onClickGender} name="female" />Female</label>                                        
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="shortBio">Short Bio:</label>
                                    <br></br>
                                    <textarea className="form-control" id="shortBio" value={this.state.shortBio} onChange={this.onClickShortBio} name="shortBio"></textarea> 
                                </div>
                                
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                               
                            <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="customFile" name="filename" />
                                <label className="custom-file-label" for="customFile">Add Photo</label>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" value="ADD"/>
                            </div>
                            </div>
                        </form>
                </div>
            </div>
        )
    }
}

export default ContactPageForm;
