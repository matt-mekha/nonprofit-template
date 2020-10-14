import React from 'react';
import Title from '../components/Title';
import { contactMethods } from '../data/info.json'

const ContactMethod = ({ key, title, linkHref, linkName, img }) => (
  <div key={key} className="contactMethodContainer">
    <p className="contactMethodTitle">{title}: </p><a className="contactMethodLink" href={linkHref}>{linkName}</a>
  </div>
)

export default () => (
  <>
    <Title>Contact Us:</Title>
    {
      contactMethods.map((page, i) => (
        <ContactMethod key={i} title={page.title} linkHref={page.linkHref} linkName={page.linkName} img={page.img} />
      ))
    }
  </>
)