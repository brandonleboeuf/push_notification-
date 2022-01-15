// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {
    id: 1,
    scheduledTime: new Date('January 15, 2022 11:25:00').getTime(),
    timeRange: 60000, // Any time within one minuit of scheduledTime
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
