module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 4,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 4,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 4,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 4,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 4,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 5,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "Q 1",
          answer: "A 1",
          point: "200",
          topic_id: 6,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 2",
          answer: "A 2",
          point: "400",
          topic_id: 6,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 3",
          answer: "A 3",
          point: "600",
          topic_id: 6,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 4",
          answer: "A 4",
          point: "800",
          topic_id: 6,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Q 5",
          answer: "A 5",
          point: "1000",
          topic_id: 6,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cards", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};