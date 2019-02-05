import React from 'react';

import CollectionContainer from '../containers/CollectionContainer';
import ConverterContainer from '../containers/ConverterContainer';

const COMPONENTS = {
    CollectionContainer: 'currency',
    ConverterContainer: 'converter',
};

export class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" id="currency" href="#currency" onClick={this._onBtnClick}>Текущие курсы валют</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="converter" href="#converter" onClick={this._onBtnClick}>Конвертер валюты</a>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this._manageActive();
    }

    componentDidUpdate() {
        this._manageActive();
    }

    _onBtnClick = (e) => {
        this._deactivateLastTab();

        if (e.currentTarget.id == 'converter') {
            this.props.switchPage(ConverterContainer);
        } else {
            this.props.switchPage(CollectionContainer);
        }
    }

    /** Remove class ``active`` from last active tab */
    _deactivateLastTab = () => {
        const activeElem = document.querySelector('.nav .active');
        const { className } = activeElem;
        activeElem.className = className.replace(' active', '');
    }

    _manageActive = () => {
        const id = COMPONENTS[this.props.activePage.name];
        const elem = document.getElementById(id);
        elem.className += ' active';
    }
}
