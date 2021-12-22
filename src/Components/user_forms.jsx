import React, { Component } from 'react';
import currency_data from './Resources/currency.json';
import BENEFICIARY from './beneficiary';
import BANK from './bank_details';
import ADDRESS from './address'
import "./user_forms.css"

class USERFORM extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            step: 1,
            tab:true,
                fname:'',
                lname:'',
                email:'',
                phone:'',
                business_name:'',
                business_email:'',
                business_phone:'',
                accountnum:'',
                ifscode:'',
                currency: [...currency_data],
                country_Id:"0",
                city:'',
                postcode:'',
                address:''
        };
    }

    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step+1
        })
    }

    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step-1
        })
    }

    handleChange = input=>e => {
        this.setState({[input]:e.target.value});
        console.log(input+": ",e.target.value);
    }

    render() {
        
        const {step} = this.state;
        const {fname, lname, email, phone, 
            business_name, business_email, business_phone, 
            accountnum, ifscode, currency, 
            country_Id, city, postcode, address} = this.state;
        const values = {fname, lname, email, phone, 
            business_name, business_email, business_phone, 
            accountnum, ifscode, currency, 
            country_Id, city, postcode, address};
        switch(step){
            case 1: return(
                <BENEFICIARY
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                values={values}
                tab={this.state.tab}/>
            )

            case 2: return(
                <BANK
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}/>
            )

            case 3: return(
                <ADDRESS
                handleChange={this.handleChange}
                prevStep={this.prevStep}
                values={values}/>
            )
        }
    }
}
 
export default USERFORM;