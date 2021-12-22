import React, {Component} from 'react';



class BANK extends Component {
    constructor(props){
        super(props);
        this.state = {
            idx:0,
            currCurrency: this.props.values.currency[0].currencyCode
        }
    };
 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    updateCountry = e => {
        this.setState({"idx": e.target.value});
    }

    render() {
        return(
            <form action="#" className='form'>
                {/* PROGRESS BAR */}
                <div className="progressbar">
                    <div className="progress progress-50" id="progress"></div>
                    <div className="progress-step progress-step-active" data-title='Beneficiary'></div>
                    <div className="progress-step progress-step-active" data-title='Bank Details'></div>
                    <div className="progress-step" data-title='Address'></div>
                </div>

                {/* STEPS */}
                <div className="forms-step forms-step-active">
                    <div className="input-group">
                        <label htmlFor="country">Country</label>
                        <select name="country-list" id="country-list"
                        value={this.props.values.currency[this.props.values.countryId]} 
                        onChange={this.props.handleChange('country_Id')}
                        onInput={this.updateCountry}>
                        {this.props.values.currency.map((item) => {
                            return <option className="country-options" key={item.id} value={item.id}>{item.countryCode +" - "+item.countryName}</option>
                            
                        })}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="currency-value">Currency</label>
                        <input className='input-disabled' type="text" name='bank-details' id='bank-details' 
                        value={this.props.values.currency[this.state.idx].countryName
                            +" ("+this.props.values.currency[this.state.idx].currencyCode+")"} disabled/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="bank-details">Bank Details Format</label>
                        <input className='input-disabled' type="text" name='bank-details' id='bank-details' 
                        value={this.props.values.currency[this.state.idx].countryName + " local"} disabled/>
                    </div>
                    <div className="input-group">
                        <input type="text" name='ifscode' id='ifscode' placeholder='IFS Code'
                        value={this.props.values.ifscode}
                        onChange={this.props.handleChange('ifscode')}/>
                    </div>
                    <div className="input-group">
                        <input type="text" name='accountnum' id='accountnum' placeholder='Account Number'
                        value={this.props.values.accountnum}
                        onChange={this.props.handleChange('accountnum')}/>
                    </div>
                    <div className="btn-group">
                        <a href="#" className='btn btn-prev' onClick={this.back}>Previous</a>
                        <a href="#" className='btn btn-next' onClick={this.continue}>Next</a>
                    </div>
                </div>
            </form>
        
            );
    }
}

export default BANK;