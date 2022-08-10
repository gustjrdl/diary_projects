import React, { useState, useRef, useEffect } from 'react'
import diaryInsert from './components/diaryInsert'
import diaryTemplate from './components/diaryTemplate'
import diaryList from './components/diaryList'
import diaryEdit from './components/diaryEdit'

function App() {
  const [diarys, setdiarys] = useState([])
  const [selectedDiary, setSelectedDiary] = useState(null)
  const [insertToggle, setInsertToggle] = useState(false)
  const [editToggle, seteitToggle] = useState(false)

  const onToggle = async id => {
    try {
      await axios({
        url: `http://localhost:4000/diarys/check/${id}`,
        method: 'PATCH',
      })
      setdiarys(diarys =>
        diarys.map(diary =>
          diary.id === id ? { ...diary, checked: !diary.checked } : diary
        )
      )
    } catch (e) {
      setError(e)
    }
  }

  const nextId = useRef(1)

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onChangeSelectedDiary = diary => {
    setSelectedDiary(selectedDiary => diary)
  }

  const onRemove = async id => {
    try {
      await axios({
        url: `http://localhost:4000/diarys/${id}`,
        method: 'DELETE',
      })
      setdiarys(diarys => diarys.filter(diary => diary.id !== id))
    } catch (e) {
      setError(e)
    }
  }

  const onUpdate = async (id, text) => {
    try {
      await axios({
        url: `http://localhost:4000/diarys/${id}`,
        method: 'PATCH',
        data: { text, perform_date: '2022-08-04 12:12:12' },
      })
      setdiarys(diarys =>
        diarys.map(diary => (diary.id === id ? { ...diary, text } : diary))
      )
      onInsertToggle()
    } catch (e) {
      setError(e)
    }
  }

  const onInsert = async text => {
    try {
      const data = await axios({
        url: 'http://localhost:4000/diarys',
        method: 'POST',
        data: { text },
      })
      setdiarys(diarys => [...diarys, data.data])
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: 'http://localhost:4000/diarys',
          method: 'GET',
        })
        setdiarys(diarys => [...data.data])
        setIsLoading(false)
      } catch (e) {
        setError(e)
      }
    }
    getData()
  }, [])
  if (error) {
    console.log(error)
    return <>에러: {error.message}</>
  }

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <diaryTemplate>
      <diaryInsert onInsert={onInsert} />
      <diaryList
        diarys={diarys}
        onToggle={onToggle}
        onRemove={onRemove}
        onChangeSelectedDiary={onChangeSelectedDiary}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && (
        <diaryEdit selectedDiary={selectedDiary} onUpdate={onUpdate} />
      )}
    </diaryTemplate>
  )
}

export default App
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
