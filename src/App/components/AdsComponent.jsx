import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className="adsbygoogle"
            style={{display:'block'}}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-8401057730397705"
            data-ad-slot="5834475484"></ins>
    );
  }
}