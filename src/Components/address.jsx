import React, {Component} from 'react';



class ADDRESS extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return(
            <form action="#" className='form'>
                {/* PROGRESS BAR */}
                <div className="progressbar">
                    <div className="progress progress-100" id="progress"></div>
                    <div className="progress-step progress-step-active" data-title='Beneficiary'></div>
                    <div className="progress-step progress-step-active" data-title='Bank Details'></div>
                    <div className="progress-step progress-step-active" data-title='Address'></div>
                </div>

                {/* STEPS */}
                <div className="forms-step forms-step-active">
                    <div className="input-group">
                        <label htmlFor="country_ID">Country</label>
                        <input className='input-disabled' type="text" name='country_Id' id='country_Id' placeholder='Country ID' 
                        value={this.props.values.currency[this.props.values.country_Id].countryCode}
                        disabled/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' id='city' placeholder='City' 
                        value={this.props.values.city}
                        onChange={this.props.handleChange('city')}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="postcode">Post code</label>
                        <input type="text" name='postcode' id='postcode' placeholder='Post code' 
                        value={this.props.values.postcode}
                        onChange={this.props.handleChange('postcode')}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" name='address' id='address' placeholder='Address'
                        value={this.props.values.address}
                        onChange={this.props.handleChange('address')}/>
                    </div>
                    <div className="btn-group">
                        <a href="#" className='btn btn-prev' onClick={this.back}>Previous</a>
                        <a href="#" className='btn btn-next'>Submit</a>
                    </div>
                </div>
            </form>
        
            );
    }
}

export default ADDRESS;