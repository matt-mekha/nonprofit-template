import React from 'react';

import Title from '../components/Title';
import { donationEmbedLink } from "../data/info.json"

class DonorboxEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (<>
      <script src="https://donorbox.org/widget.js"></script>
      { this.state.loading ? (<img src="/img/loading.gif" alt="Loading..." className="donorboxEmbedLoading"></img>) : <noscript></noscript>}
      <iframe
        title="Donorbox Embed"
        allowpaymentrequest=""
        frameBorder="0"
        name="donorbox"
        scrolling="no"
        seamless="seamless"
        src={donationEmbedLink}
        className="donorboxEmbed"
        onLoad={() => this.setState({ loading: false })}
      ></iframe>
    </>)
  };
}

export default () => (
  <>
    <Title>Donate:</Title>
    <DonorboxEmbed />
  </>
)