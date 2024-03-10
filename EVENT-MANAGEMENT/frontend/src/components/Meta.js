import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EVENT MANAGEMENT SYSTEM',
  description: 'We Organize Events of differnt categories at Affordable Prices',
  keywords: 'Bithdays, Marriages, Parties, Others',
}

export default Meta
