import 'react-json-pretty/themes/monikai.css'
import React from 'react'
import JSONPrettyMon from 'react-json-pretty/dist/monikai'
import JSONPretty from 'react-json-pretty'

const ViewJSON = ({ json}) => {
  return (
     
      <JSONPretty className='json' data={json} theme={JSONPrettyMon} />
  )
}

export default ViewJSON
