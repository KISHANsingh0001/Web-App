const { options } = require("../../routes/v1/assessment")

const questionnaire = {
    questions : [
        "S/he often notices small sounds when others do not",
        "S/he usually concentrates more on the whole picture, rather than the small details",
        "In a social group, s/he can easily keep track of several different people's conversations",
        "S/he finds it easy to go back and forth between different activities",
        "S/he doesn't know how to keep a conversation going with his / her peers",
        "S/he is good at social chit-chat",
        "When s/he is read a story, s/he finds it difficult to work out the character's intentions or feelings",
        "When s/he was in preschool, s/he used to enjoy playing games involving pretending with other children",
        "S/he finds it easy to work out what someone is thinking or feeling just by looking at their face",
        "S/he finds it hard to make new friends"
    ],
    options :[
        "Definetly Agree",
        "Slightly Agree",
        "Slightly Disagree", 
        "Snetly Disagree"
    ]
}
module.exports = questionnaire;