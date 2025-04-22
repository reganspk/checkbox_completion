export const dataArray = [
  {
    id: 1,
    title: "Parent 1",
    children: [
      {
        title: "children 1",
        id: 2,
      },
      { title: "children 1", id: 14 },
    ],
  },
  {
    id: 3,
    title: "Parent 2",
    children: [
      {
        title: "children 1",
        id: 4,
      },
    ],
  },
  {
    id: 5,
    title: "Parent 3",
    children: [{ title: "children 1", id: 6 }],
  },

  {
    id: 7,
    title: "Parent 4",
    children: [
      {
        title: "children 1",
        id: 8,
        children: [{ title: "children 1", id: 9 }],
      },
      {
        title: "children 2",
        id: 10,
        children: [
          {
            title: "children 3",
            id: 11,
            children: [
              {
                title: "children 4",
                id: 12,
                children: [{ title: "children 5", id: 13 }],
              },
            ],
          },
        ],
      },
    ],
  },
];
