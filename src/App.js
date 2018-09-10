import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactJson from 'react-json-view';
import { submitTransaction } from './actions';
import ResultContainer from './components/result-container/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionInput: '',
    };
  }

  renderResult() {
    const { transaction } = this.props;
    if (transaction.loading === true) {
      return <h3>Loading...</h3>;
    }
    else if (transaction.result === null) {
      return <h3>Please submit a Bitcoin transaction hash to get a result</h3>;
    }
    else {
      return (
        <h3>
          <ReactJson style={{fontSize: '10pt'}} name="Transaction Analysis" src={transaction.result.analysis} />
          <hr />
          <ReactJson style={{fontSize: '10pt'}} name="Risk Rules" src={transaction.result.rules} />
        </h3>
      );
    }
  }

  submit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.submitTransaction(this.state.transactionInput);
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-xs-12 col-sm-4 col-md-3 pt-4 align-self-stretch lookup-sidebar">
            <h1>Bitcoin Lookup Tool</h1>
            <form onSubmit={(e) => this.submit(e)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bitcoin Transaction Hash"
                  value={this.state.transactionInput}
                  onChange={(e) => this.setState({ transactionInput: e.target.value })}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-light" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-8 col-md-9 result-area">
            <ResultContainer>
              {this.renderResult()}
            </ResultContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  submitTransaction,
}, dispatch);

const mapStateToProps = ({ transaction }) => ({
  transaction,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
