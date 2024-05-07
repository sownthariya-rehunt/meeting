const now = new Date();

export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2024, 5, 0),
    end: new Date(2024, 5, 1)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2024, 5, 7),
    end: new Date(2024, 5, 10)
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2016, 2, 15, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    id: 5,
    title: "DTS ENDS",
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 15, 0, 0, 0)
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2024, 5, 9, 0, 0, 0),
    end: new Date(2024, 5, 10, 0, 0, 0)
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2024, 5, 11),
    end: new Date(2024, 5, 15),
    desc: "Big conference for important people"
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2024, 5, 12, 10, 50, 0, 0),
    end: new Date(2024, 5, 12, 12, 50, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2024, 5, 12, 12, 0, 0, 0),
    end: new Date(2024, 5, 12, 15, 0, 0, 0),
    desc: "Power lunch"
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2024, 5, 12, 14, 0, 0, 0),
    end: new Date(2024, 5, 12, 15, 0, 0, 0)
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2024, 5, 12, 17, 0, 0, 0),
    end: new Date(2024, 5, 12, 17, 50, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2024, 5, 12, 20, 0, 0, 0),
    end: new Date(2024, 5, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: "Planning Meeting with Paige",
    start: new Date(2024, 5, 15, 8, 0, 0),
    end: new Date(2024, 5, 15, 10, 50, 0)
  },
  {
    id: 11.1,
    title: "Inconvenient Conference Call",
    start: new Date(2024, 5, 15, 9, 50, 0),
    end: new Date(2024, 5, 15, 12, 0, 0)
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2024, 5, 15, 11, 50, 0),
    end: new Date(2024, 5, 15, 14, 0, 0)
  },
  {
    id: 11.5,
    title: "Quote Follow-up - Tea by Tina",
    start: new Date(2024, 5, 15, 15, 50, 0),
    end: new Date(2024, 5, 15, 16, 0, 0)
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2024, 5, 17, 19, 50, 0),
    end: new Date(2024, 5, 18, 2, 0, 0)
  },
  {
    id: 12.5,
    title: "Late Same Night Event",
    start: new Date(2024, 5, 17, 19, 50, 0),
    end: new Date(2024, 5, 17, 25, 50, 0)
  },
  {
    id: 15,
    title: "Multi-day Event",
    start: new Date(2024, 5, 20, 19, 50, 0),
    end: new Date(2024, 5, 22, 2, 0, 0)
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 5)),
    end: new Date(new Date().setHours(new Date().getHours() + 5))
  },
  {
    id: 15,
    title: "Point in Time Event",
    start: now,
    end: now
  },
  {
    id: 16,
    title: "Video Record",
    start: new Date(2024, 5, 14, 15, 50, 0),
    end: new Date(2024, 5, 14, 19, 0, 0)
  },
  {
    id: 17,
    title: "Dutch Song Producing",
    start: new Date(2024, 5, 14, 16, 50, 0),
    end: new Date(2024, 5, 14, 20, 0, 0)
  },
  {
    id: 18,
    title: "Itaewon Halloween Meeting",
    start: new Date(2024, 5, 14, 16, 50, 0),
    end: new Date(2024, 5, 14, 17, 50, 0)
  },
  {
    id: 19,
    title: "Online Coding Test",
    start: new Date(2024, 5, 14, 17, 50, 0),
    end: new Date(2024, 5, 14, 20, 50, 0)
  },
  {
    id: 20,
    title: "An overlapped Event",
    start: new Date(2024, 5, 14, 17, 0, 0),
    end: new Date(2024, 5, 14, 18, 50, 0)
  },
  {
    id: 21,
    title: "Phone Interview",
    start: new Date(2024, 5, 14, 17, 0, 0),
    end: new Date(2024, 5, 14, 18, 50, 0)
  },
  {
    id: 22,
    title: "Cooking Class",
    start: new Date(2024, 5, 14, 17, 50, 0),
    end: new Date(2024, 5, 14, 19, 0, 0)
  },
  {
    id: 25,
    title: "Go to the gym",
    start: new Date(2024, 5, 14, 18, 50, 0),
    end: new Date(2024, 5, 14, 20, 0, 0)
  }
];
