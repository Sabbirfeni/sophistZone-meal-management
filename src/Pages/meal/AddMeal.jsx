import React from 'react'
import Form from '../../components/form/Form'
import InputField from '../../components/inputElements/inputField'

export default function AddMeal() {
    const totalUser = [
        {
            id: 346583,
            title: 'Hasan',
            align: 'left'
        },
        {
            id: 3455653,
            title: 'Shihab',
            align: 'left'
        },
        {
            id: 346553,
            title: 'Rakib',
            align: 'left'
        },
        {
            id: 34653,
            title: 'Sabbir',
            align: 'left'
        },
    ]

  return (
    <div className='box-style'>
        <Form title='Add New Meals' submitValue='Add Meals'>
            <div>
                <InputField label='date' type='date' placeholder='date'/>
            </div>
            <div className='flex flex-wrap'>
                {totalUser.map(user => <InputField key={user.id} label={user.title} type='number'/>)}
            </div>
        </Form>
    </div>
  )
}
