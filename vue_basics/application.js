const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
    "What is your favorite food?",
    "What is your favorite color?",
    "What is your favorite animal?",
    "What is your favorite movie?"
];

var app = new Vue({
    el : "#app",
    data : {
        noOfQns: questions.length,
        question : questions[0],
        prompt: "Please Reply ...",
        count : 0,
        responses: []
    },
    methods: {
        handleReply: function() {
            this.responses.push({question: this.question, answer: this.reply});
            this.count++;
            if (this.count < this.noOfQns) {
                this.question = questions[this.count];
                this.prompt= "Great Keep Going!";
                this.reply = "";
            } else {
                this.question = "That's all !"
                this.prompt = "Thank you for your time! Here are your responses:";
                this.reply = "";
            }
        }
    }
})