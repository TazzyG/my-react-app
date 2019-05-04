export const topics = [
  {
    _id: "1",
    name: "Planning",
    video: "agile"
  },
  {
    _id: "2",
    name: "Money",
    video: "Head-or-Tails"
  },
  {
    _id: "3",
    name: "People",
    video: "Productive-Morning"
  },
  {
    _id: "4",
    name: "Time",
    video: "Sunset-Lapse"
  },
  {
    _id: "5",
    name: "Coding",
    video: "Modem-lights"
  }
];

export function getTopics() {
  return topics;
}

export function getTopic(id) {
  return topics.find(m => m._id === id);
}
