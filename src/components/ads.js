// Imports from React and MovieItem
import React from 'react';
import { AdItem } from './adItem';

// Ads Class Component - Inherits from React.Component
export class Ads extends React.Component {

    render() {
        // Ads Main Code
        return this.props.myad.map(
            (ads)=>{
                return <AdItem myad={ads} ReloadData={this.props.ReloadData}></AdItem>
            }
        );
    }
}