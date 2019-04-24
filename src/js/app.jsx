import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
    constructor() {
        super();
        this.state = {
        balance: 0,
        rate: 0.01,
        term: 15,
        output: 0,
        };
        this.handleBalance = this.handleBalance.bind(this);
        this.handleRate = this.handleRate.bind(this);
        this.handleTerm = this.handleTerm.bind(this);
        this.calculate = this.calculate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleBalance(event) {
      this.setState({ balance: event.target.value });
    }
    handleRate(event) {
        this.setState({ rate: event.target.value });
    }
    handleTerm(event) {
        this.setState({ term: event.target.value });
    }
  
    calculate(balance, rate, term) {
      var p = balance;
      var r = (rate / 100) / 12;
      var n = term * 12;
      var calcNumertor = (r * (Math.pow((1 + r), n)));
      var calcDeonom = ((Math.pow((1 + r), n)) - 1);
      var monthly = (p * (calcNumertor / calcDeonom)).toFixed(2);
      return Number(monthly);
    }
  
    handleClick(event) {
    var balance = this.state.balance;
      var rate = this.state.rate;
      var term = this.state.term;
      var payment = this.calculate(balance, rate, term);
      console.log(typeof payment);
    this.setState({
        output: (payment.toFixed(2))
      });
      console.log(typeof this.state.output);
    if (isNaN(payment)) {
        console.log('payment is not a number');
      } else {
        console.log('Payment calculated');
      };
      return (payment.toFixed(2));
    }
  
    render() {
    return (
      <div className='container'>

        <h3>Mortgage Calculator</h3>
        
        <form className="form-horizontal">
          <div className="form-group">
            <label 
            className="col-sm-2 control-label"
            > 
              Enter Your Loan Amount: 
            </label>
            <input 
              className="form-control"
              name='balance'
              type='number'
              value={this.state.balance}
              onChange={(event) => this.handleBalance(event)}
            />
          </div>

          <div
          className="form-group"
          >
            <label
            className="col-sm-2 control-label"
            > 
              Enter Your Annual Percentage Rate: 
            </label>
            <input
              className="form-control"
              name='rate'
              type='number'
              step='0.01'
              value={this.state.rate}
              onChange={(event) => this.handleRate(event)}
            />
          </div>

          <div
            className="form-group"
          >
            <label
              className="col-sm-2 control-label"
            >
              Select Your Loan Term: 
            </label>
            <select
              className="form-control"
              name='term'
              type='number'
              value={this.state.term}
              onChange={(event) => this.handleTerm(event)}
            >
                <option value='15'>
                  15
                </option >
                <option value='30'>
                  30
                </option>
            </select>
          </div>

          <div
            className="form-group"
          >
            <button
              name='submit'
              onClick={(event) => this.handleClick(event)}
              type="button" 
              className="btn btn-success"
            > Calculate! </button>
          </div>
        </form>

        <div
          id='output'
          type='string'
        >
          $ {(this.state.output)} is your payment.
        </div>

      </div>
    );
  }
}
