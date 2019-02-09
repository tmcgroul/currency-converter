import React from 'react';
import Select from 'react-select';

export default class ConverterPage extends React.Component {
    state = {
        firstSelectizeOption: { value: 'R01235', label: 'Доллар США' },
        secondSelectizeOption: { value: 'R01239', label: 'Евро' },
        firstInputValue: 1,
    }

    render() {
        let options = this.props.currencies.map(item => {
            return {
                label: item.Name,
                value: item.ID
            }
        });
        options = this._sortOptions(options);
        return (
            <div className="converter-page">
                <input type="text" value={this.state.firstInputValue} onChange={this._handleFirstInput} className="form-control first"></input>
                <Select
                    className="currency-selector first"
                    value={this.state.firstSelectizeOption}
                    options={options}
                    onChange={this._handleFirstSelectize}
                />
                <input type="text" value={this.state.secondInputValue} onChange={this._handleSecondInput} className="form-control second"></input>
                <Select
                    className="currency-selector second"
                    value={this.state.secondSelectizeOption}
                    options={options}
                    onChange={this._handleSecondSelectize}
                />
            </div>
        );
    }

    componentWillMount() {
        const { firstSelectizeOption, secondSelectizeOption, firstInputValue } = this.state;
        const params = {
            firstSelectizeOption,
            secondSelectizeOption,
            firstInputValue
        };
        this.setState({secondInputValue: this._calc(params, 'second')});
    }

    _calc(params, which) {
        const { firstSelectizeOption, secondSelectizeOption, firstInputValue, secondInputValue } = params;
        const firstCurrency = this.props.currencies.find(item => item.Name == firstSelectizeOption.label);
        const secondCurrency = this.props.currencies.find(item => item.Name == secondSelectizeOption.label);
        const firstPrice = firstCurrency.Value / firstCurrency.Nominal;
        const secondPrice = secondCurrency.Value / secondCurrency.Nominal;
        let result;

        if (which == 'first') {
            result = secondPrice * secondInputValue / firstPrice;
        } else {
            result = firstPrice * firstInputValue / secondPrice;
        }

        return result.toFixed(2);
    }

    _handleFirstInput = (e) => {
        const { firstSelectizeOption, secondSelectizeOption } = this.state;
        const value = parseInt(e.currentTarget.value);
        const params = {
            firstSelectizeOption,
            secondSelectizeOption,
            firstInputValue: value,
        };
        this.setState({ secondInputValue: this._calc(params, 'second'), firstInputValue: value });
    }

    _handleSecondInput = (e) => {
        const { firstSelectizeOption, secondSelectizeOption } = this.state;
        const value = parseInt(e.currentTarget.value);
        const params = {
            firstSelectizeOption,
            secondSelectizeOption,
            secondInputValue: value,
        };
        this.setState({ firstInputValue: this._calc(params, 'first'), secondInputValue: value });
    }

    _handleFirstSelectize = (value) => {
        const { secondSelectizeOption, secondInputValue } = this.state;
        const params = {
            firstSelectizeOption: value,
            secondSelectizeOption,
            secondInputValue,
        };
        this.setState({ firstInputValue: this._calc(params, 'first'), firstSelectizeOption: value });
    }

    _handleSecondSelectize = (value) => {
        const { firstSelectizeOption, firstInputValue } = this.state;
        const params = {
            secondSelectizeOption: value,
            firstSelectizeOption,
            firstInputValue,
        };
        this.setState({ secondInputValue: this._calc(params, 'second'), secondSelectizeOption: value });
    }

    _sortOptions = (options) => {
        return options.sort((previous, current) => {
            if (current.label > previous.label) {
                return -1;
            }

            return 1;
        });
    }
}
