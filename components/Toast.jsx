import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Toast = () => {

  const userNotificationList = []

  useEffect(()=> {
    setInterval(notification, 5000)
  },[])

  const notification = async () => {
    const {messages} = await fetch('/api/getNotifications').then(res => res.json())

    messages.map((item) => {
      if (!userNotificationList.includes(item.id)) {

        toast((t) => (
          <span>
            {item.message}
            <button onClick={() => toast.dismiss(t.id)}>
              X
            </button>
          </span>
        ))

        userNotificationList.push(item.id)
      }
    })

  }

  return (
    <>
      <p>Normal content</p>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: Infinity
        }}
      />
    </>
  )
}