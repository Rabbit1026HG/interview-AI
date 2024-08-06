import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={()=>setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={()=>setTab('yearly')}>Yearly</li>
      </ul>
      <Section className="row">
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Standard'
              price='29'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Standard'
              price='59'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
         {tab==='monthly' && (
            <PricingTable 
              title='Professional'
              price='199'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Professional'
              price='399'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
        <Section className="col-lg-4">
          {tab==='monthly' && (
            <PricingTable 
              title='Ultimate'
              price='299'
              currency='$'
              timeline='monthly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          {tab==='yearly' && (
            <PricingTable 
              title='Ultimate'
              price='599'
              currency='$'
              timeline='yearly'
              features={['Static responsive website', 'Video marketing', 'Keywords research', 'Facebook campaign', 'eCommerce solution', 'Google adword']}
              btnText='Purchase Now'
              btnLink='/'
            />
          )}
          <Spacing lg='25' md='25'/>
        </Section>
      </Section>
    </Section>
  )
}
