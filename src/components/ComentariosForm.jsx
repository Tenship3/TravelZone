'use client'

import {Input, Textarea, Button, User} from '@nextui-org/react'
import { StarFill } from './ui/icons/Stars';
import Send from './ui/icons/Send';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ComentariosForm() {

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState({
    name: {value: '', isInvalid: false, errorMessage: ''},
    message: {value: '', isInvalid: false, errorMessage: ''},
    grade: {value: '', isInvalid: false, errorMessage: ''},
  })
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setLoading(true)
    axios.get('/api/comments')
    .then(response => setComments(response.data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [reload])

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage('')

    if(sessionStorage.getItem('isLoggedIn') === null) return alert('Primero debe iniciar  sesión')

    setLoading(true)
    axios.post('/api/comments', {
      user: JSON.parse(sessionStorage.getItem('isLoggedIn')).email,
      name: comment.name.value,
      message: comment.message.value,
      grade: comment.grade.value,
      date: new Date()
    })
    .then(() => {
      setReload(!reload)
    })
    .catch(err => {
      if(!err.response.data) return setErrorMessage(err.response.statusText)

      if(err.response.data.errors) return setComment({
        ...comment,
        name: {...comment.name, isInvalid: err.response.data.errors.name !== '' ? true : false, errorMessage: err.response.data.errors.name},
        message: {...comment.message, isInvalid: err.response.data.errors.message !== '' ? true : false, errorMessage: err.response.data.errors.message},
        grade: {...comment.grade, isInvalid: err.response.data.errors.grade !== '' ? true : false, errorMessage: err.response.data.errors.grade}
      })
    })
    .finally(() => setLoading(false))
  }

  return (
    <section className='flex flex-col gap-5'>
      <h4 className='text-teal-700 text-4xl text-center'>COMMENTS</h4>

      <form onSubmit={handleSubmit} className='flex justify-center'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <Input 
              type='text' 
              label="Name" 
              size='sm' 
              variant='bordered'
              isRequired
              value={comment.name.value}
              isInvalid={comment.name.isInvalid}
              errorMessage={comment.name.errorMessage}
              onChange={(e) => setComment({...comment, name: {value: e.target.value, isInvalid: false, errorMessage: ''}})}
              />
            <div className='flex gap-1 items-center min-w-[110px]'>
              <StarFill fill="orange" size={25} />
              <Input 
                type='number' 
                label="Grade" 
                size='sm' 
                variant='bordered' 
                placeholder='0 - 5' 
                isRequired
                value={comment.grade.value}
                isInvalid={comment.grade.isInvalid}
                errorMessage={comment.grade.errorMessage}
                onChange={(e) => setComment({...comment, grade: {value: e.target.value, isInvalid: false, errorMessage: ''}})}
                />
            </div>
          </div>
          <Textarea 
            variant='bordered' 
            label="Comment"
            isRequired
            value={comment.message.value}
            isInvalid={comment.message.isInvalid}
            errorMessage={comment.message.errorMessage}
            onChange={(e) => setComment({...comment, message: {value: e.target.value, isInvalid: false, errorMessage: ''}})}
            >
          </Textarea>
          <Button type='submit' isLoading={loading} variant='shadow' className="bg-gradient-to-tr from-blue-500 to-sky-300 text-white w-fit flex items-center gap-1">
            <Send fill="white" />
            Send
          </Button>
        </div>
      </form>

      <div className='mt-10 flex flex-col gap-5 w-full items-center'>
        {
          comments.map(comment => (
            <div key={comment.id} className='p-2 border border-slate-400 rounded-xl bg-white flex flex-col gap-3 max-w-[430px]'>
              <User 
                name={comment.name}
                description={comment.user}
                avatarProps={{ 
                  src: '/profile.png'
                 }}
              />

              <div className='flex flex-col gap-1 text-black text-opacity-50'>
                <div className='flex items-center gap-1'>
                  <StarFill fill="orange" size={15} />
                  <span className='text-tiny'>{comment.grade}</span>
                </div>
                <p>{comment.message}</p>
                <span className='text-tiny'>{comment.date.split('T')[0]}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ComentariosForm