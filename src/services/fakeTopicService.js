export const topics = [
  {
    _id: "1",
    name: "Planning",
    video: "agile",
    icon: "seedling"
  },
  {
    _id: "2",
    name: "Money",
    video: "Head-or-Tails",
    icon: "coins"
  },
  {
    _id: "3",
    name: "People",
    video: "Productive-Morning",
    icon: "people-carry"
  },
  {
    _id: "4",
    name: "Time",
    video: "Sunset-Lapse",
    icon: "hourglass-start"
  },
  {
    _id: "5",
    name: "Coding",
    video: "Modem-lights",
    icon: "code"
  }
];

export function getTopics() {
  return topics;
}

export function getTopic(id) {
  return topics.find(m => m._id === id);
}
