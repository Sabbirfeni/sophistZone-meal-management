import React from 'react'
import Form from '../../components/form/Form'
import InputField from '../../components/inputElements/inputField'
import SelectInputField from '../../components/inputElements/SelectInputField'

export default function AddTransaction() {
  return (
    <div className='div-shadow  box-style'>
      <Form title='Add New Transaction' submitValue='Add Transaction'>
        <div className='flex flex-wrap'>
            <InputField label={'Date'} type={'date'} value={''} placeholder={'date'}/>
            <InputField label={'Amount'} type={'number'} value={''} placeholder={'amount'}/>
            <InputField label={'Purpose'} type={'text'} value={''} placeholder={'purpose'}/>
        </div>
        <div className='flex flex-wrap'>
            <SelectInputField label={'Transaction Type'} options={['Deposit', 'Expense']}/>
            
            <SelectInputField label={'Belongs To'} options={['Sabbir', 'Niloy', 'Rashed', 'Shorif', 'Arko', 'Obayed']}/>
        </div>
      </Form>
    </div>
  )
}
