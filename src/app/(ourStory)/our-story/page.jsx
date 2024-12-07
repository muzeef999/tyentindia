import Management from '@/app/compoents/(story)/Management'
import Form from '@/app/compoents/Form/Form'
import dynamic from 'next/dynamic';
import React from 'react'
const Mission = dynamic(() => import('@//app/compoents/(story)/Mission'), { ssr: false });

const page = () => {
  return (
    <div>
      <Mission />
      <Management/>
      <Form />
    </div>
  )
}

export default page