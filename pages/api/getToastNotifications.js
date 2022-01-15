// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {
    id: 1, // Id used to ensure that message isn't displayed multiple times
    scheduledTime: new Date('January 15, 2022 11:25:00').getTime(), // Time for the message to be sent to the App
    timeRange: 60000, // If the user is logged in any time within one minuit of scheduledTime, this will be shown.
    message: "This is the message for nicole"
  },
  {
    id: 2,
    scheduledTime: new Date('January 15, 2022 11:25:40').getTime(),
    timeRange: 160000,
    message: "Welco9me to the bigggg show BRODNOA"
  },
  {
    id: 3,
    scheduledTime: new Date('January 15, 2022 11:26:00').getTime(),
    timeRange: 2160000,
    message: "This is a long sentance that is kind of a run on. But you should check out the session that is coming soon baby, yua!!"
  },
]

export default function handler(req, res) {
  const now = Date.now()
  const messagesArray = []

  data.map(item => {
    // Only show if it is after the scheduledTime but before the end of the timeRange
    if (now >= item.scheduledTime && now < item.scheduledTime + item.timeRange ) {
      messagesArray.push({ id: item.id, message: item.message})
    }
  })

  if (messagesArray.length) {
    res.status(200).json({messages: messagesArray})
  } else {
    res.status(200).json({messages: []})
  }
}
