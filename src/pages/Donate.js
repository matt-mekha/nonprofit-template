import React from 'react';

import Title from '../components/Title';
import { donationEmbedLink } from "../data/info.json"

const DonorboxEmbed = () => (
  <>
    <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
    <iframe
      title="Donorbox Embed"
      allowpaymentrequest=""
      frameborder="0"
      name="donorbox"
      scrolling="no"
      seamless="seamless"
      src={donationEmbedLink}
      className="donorboxEmbed"
    ></iframe>
  </>
)

export default () => (
  <>
    <Title>Donate:</Title>
    <DonorboxEmbed />
  </>
)