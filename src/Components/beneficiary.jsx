import React, {Component} from 'react';



class BENEFICIARY extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return(
            <form action="#" className='form'>
                {/* PROGRESS BAR */}
                <div className="progressbar">
                    <div className="progress progress-33" id="progress"></div>
                    <div className="progress-step progress-step-active" data-title='Beneficiary'></div>
                    <div className="progress-step" data-title='Bank Details'></div>
                    <div className="progress-step" data-title='Address'></div>
                </div>

                {/* STEPS */}
                <div className="forms-step forms-step-active">
                    <div className="input-group">
                        <input type="text" name='fname' id='fname' placeholder='First Name' 
                        value={this.props.values.fname}
                        onChange={this.props.handleChange('fname')}/>
                    </div>
                    <div className="input-group">
                        <input type="text" name='lname' id='lname' placeholder='Last Name' 
                        value={this.props.values.lname}
                        onChange={this.props.handleChange('lname')}/>
                    </div>
                    <div className="input-group">
                        <input type="text" name='email' id='email' placeholder='Email' 
                        value={this.props.values.email}
                        onChange={this.props.handleChange('email')}/>
                    </div>
                    <div className="input-group">
                        <input type="number" name='phone' id='phone' placeholder='Phone Number'
                        value={this.props.values.phone}
                        onChange={this.props.handleChange('phone')}/>
                    </div>
                    <div className="">
                        <a href="#" className='btn btn-next width-50 ml-auto' onClick={this.continue}>Next</a>
                    </div>
                </div>
            </form>
        
            );
    }
}

export default BENEFICIARY;