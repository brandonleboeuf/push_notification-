import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Toast = () => {

  // List of notifications that this user has previously received
  const userNotificationList = []

  useEffect(()=> {
    // Calls api to check for messages every 30 seconds
    setInterval(notification, 3000)
  },[])

  const notification = async () => {
    const {messages} = await fetch('/api/getToastNotifications').then(res => res.json())

    if (messages === "Nothing scheduled") return

    messages.forEach((item) => {
      // only display if this message is not listed in the userNotificationList
      if (!userNotificationList.includes(item.id)) {

        // default
        toast.success(item.message)

        // custom
        toast((t) => (
          <span style={{position :"relative"}}>
            {item.message}
            <button style={{position: "absolute", top: "-1rem", right: "-1rem", padding: ".25rem", cursor: "pointer", border: "none", backgroundColor: "black", color: "white"}} onClick={() => toast.dismiss(t.id)}>
              X
            </button>
          </span>
        ),
          {
            duration: Infinity,
            position: 'top-right',
          }
        )
        // Adds this notification to the users userNotificationList
        userNotificationList.push(item.id)
      }
    })

  }

  return (
    <Toaster
      // TODO: can also be added globally
      // position="top-right"
      // toastOptions={{
      //   duration: Infinity
      // }}
    />
  )
}