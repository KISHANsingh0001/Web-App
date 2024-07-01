// TODO write adult scores in the same manner as child scores 

const { options } = require("nodemon/lib/config");

const AQ_scores = [
    // Scores for questions 1 to 50
    {
        // 1
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 2
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 3
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 4
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 5
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 6
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 7
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 8
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 9
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 10
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 11
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 12
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 13
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 14
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 15
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 16
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 17
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 18
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 19
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 20
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 21
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 22
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 23
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 24
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 25
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 26
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 27
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 28
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 29
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 30
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 31
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 32
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 33
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 34
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 35
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 36
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 37
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 38
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 39
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 40
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 41
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 42
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 43
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 44
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 45
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 46
        definetlyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definetlyDisagree: 0
    },
    {
        // 47
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 48
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 49
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    },
    {
        // 50
        definetlyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definetlyDisagree: 1
    }
];
  
const ASRS_5_Scores = {

    Never :0,
    Rarely:1,
    Sometimes:2,
    Often:3,
    VeryOften:4

};

const AQ_10_Scores = [
    {
        // 1
        definitelyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definitelyDisagree: 0
      },
      {
        // 2
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 3
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 4
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 5
        definitelyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definitelyDisagree: 0
      },
      {
        // 6
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 7
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 8
        definitelyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definitelyDisagree: 0
      },
      {
        // 9
        definitelyAgree: 0,
        slightlyAgree: 0,
        slightlyDisagree: 1,
        definitelyDisagree: 1
      },
      {
        // 10
        definitelyAgree: 1,
        slightlyAgree: 1,
        slightlyDisagree: 0,
        definitelyDisagree: 0
      }
    ];

const CAT_Q_Scores = [
    {
      // 1
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 2
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 3 (Reversed scoring)
      "Strongly Disagree": 7,
      "Disagree": 6,
      "Somewhat Disagree": 4,
      "Neither Agree nor Disagree": 3,
      "Somewhat Agree": 2,
      "Agree": 1,
      "Strongly Agree": 7
    },
    {
      // 4
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 5
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 6
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 7
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 8
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 9
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 10
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 11
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 12 (Reversed scoring)
      "Strongly Disagree": 7,
      "Disagree": 6,
      "Somewhat Disagree": 4,
      "Neither Agree nor Disagree": 3,
      "Somewhat Agree": 2,
      "Agree": 1,
      "Strongly Agree": 7
    },
    {
      // 13
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 14
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 15
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 16
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 17
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 18
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 19 (Reversed scoring)
      "Strongly Disagree": 7,
      "Disagree": 6,
      "Somewhat Disagree": 4,
      "Neither Agree nor Disagree": 3,
      "Somewhat Agree": 2,
      "Agree": 1,
      "Strongly Agree": 7
    },
    {
      // 20
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 21
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 22 (Reversed scoring)
      "Strongly Disagree": 7,
      "Disagree": 6,
      "Somewhat Disagree": 4,
      "Neither Agree nor Disagree": 3,
      "Somewhat Agree": 2,
      "Agree": 1,
      "Strongly Agree": 7
    },
    {
      // 23
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    },
    {
      // 24 (Reversed scoring)
      "Strongly Disagree": 7,
      "Disagree": 6,
      "Somewhat Disagree": 4,
      "Neither Agree nor Disagree": 3,
      "Somewhat Agree": 2,
      "Agree": 1,
      "Strongly Agree": 7
    },
    {
      // 25
      "Strongly Disagree": 1,
      "Disagree": 2,
      "Somewhat Disagree": 3,
      "Neither Agree nor Disagree": 4,
      "Somewhat Agree": 5,
      "Agree": 6,
      "Strongly Agree": 7
    }
]
  