// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {
    id: 1, // Id used to ensure that message isn't displayed multiple times
    scheduledTime: new Date('January 19, 2022 08:45:00').getTime(), // Time for the message to be sent to the App
    displayWindow: 60000 * 5, // If the user is logged in any time within one minuit of scheduledTime, this will be shown.
    message: "This is the message for nicole"
  },
  {
    id: 2,
    scheduledTime: new Date('January 19, 2022 08:45:40').getTime(),
    displayWindow: 60000 * 5,
    message: "Welco9me to the bigggg show BRODNOA"
  },
  {
    id: 3,
    scheduledTime: new Date('January 19, 2022 08:46:00').getTime(),
    displayWindow: 60000 * 5,
    message: "This is a long sentance that is kind of a run on. But you should check out the session that is coming soon baby, yua!!"
  },
]

export default function handler(req, res) {
  const now = Date.now()
  const messagesArray = []

  data.forEach(item => {
    // Only show if it is after the scheduledTime but before the end of the displayWindow
    if (now >= item.scheduledTime && now < item.scheduledTime + item.displayWindow ) {
      messagesArray.push({ id: item.id, message: item.message})
    }
  })

  if (messagesArray.length) {
    res.status(200).json({messages: messagesArray})
  } else {
    res.status(200).json({messages: 'Nothing scheduled'})
  }
}
