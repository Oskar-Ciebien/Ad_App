// Imports from React and AdItem
import React from 'react';
import { AdItem } from './adItem';

// Ads Class Component - Inherits from React.Component
export class Ads extends React.Component {

    render() {
        // Ads Main Code
        return this.props.myads.map(
            (ad)=>{
                return <AdItem myad={ad} ReloadData={this.props.ReloadData}></AdItem>
            }
        );
    }
}