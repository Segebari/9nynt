import React from 'react'
import Benefits from './Benefits'

const Benefitslogic = () => {
  // Define an array of content objects
  const contentList = [
    {
      num: '1',
      title: 'Local Cafes & Restaurants',
      description:
        'Elevate your online presence, efficiently manage orders, and boost delivery services.',
    },
    {
      num: '2',
      title: 'Artisanal Boutiques',
      description:
        'Showcase your unique products to a broader audience and streamline customer transactions.',
    },
    {
      num: '3',
      title: 'Service-Based Businesses',
      description:
        'Offer hassle-free appointment bookings and online service reservations for your clients.',
    },
  ]

  return (
    <div className="flex w-full justify-between pb-10">
      {contentList.map((content, index) => (
        <Benefits
          key={index}
          num={content.num}
          title={content.title}
          description={content.description}
        />
      ))}
    </div>
  )
}

export default Benefitslogic
