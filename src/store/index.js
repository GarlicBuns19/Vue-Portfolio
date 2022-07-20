import { createStore } from 'vuex'

export default createStore({
  state: {
      portfolioUrl: 'https://i.postimg.cc/Fs9sBMTW/Raeesedit.png',
      about:[
        {
          p:'I am a humble person. I believe that respect is earned through time, hard work, and trust in order to have respect not only for the people close to you but for everyone that you meet. I am a hard worker who wants to get the job done as simply as possible and with the best quality.'
        },
        {
          p:'My passion for computers started when I was 12 years old.I have learnt the knowledge to build a computer and I am still learning more about each component.'
        },
        {
          p:'When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.'
        },
      ],
      projects:[
        {
          image:'https://i.postimg.cc/zX9QGs96/Pokedex.png',
          projectName:'Pokedex Api',
          aboutProject: 'This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.'
        },
        {
          image:'https://i.postimg.cc/tTM5mPbw/Property-Listing.png',
          projectName:'Property Listing',
          aboutProject: 'This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.'
        },
        {
          image:'https://i.postimg.cc/506G0f2c/TodoApp.png',
          projectName:'TodoApp',
          aboutProject: 'This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.'
        },
        {
          image:'https://i.postimg.cc/MG8KVrjr/Bmi-Calculator.png',
          projectName:'Bmi-Calculator',
          aboutProject: 'This is a 2222222t'
        },
        {
          image:'https://i.postimg.cc/qBKbZbtG/Swegga.png',
          projectName:'Swegga',
          aboutProject: 'This is a project4444444444444444444'
        },
        {
          image:'https://i.postimg.cc/VN549DQn/Temp-Calculator.png',
          projectName:'Temperature Converter',
          aboutProject: 'This is a project4444444444444444444'
        }
      ],
      testimonails:[
        {
          image:'https://i.postimg.cc/L6RckKyP/Charles.jpg',
          name: 'Abdus Samad Charles',
          aboutMe:'My passion for computers started when I was 12 years old.I have learnt the knowledge to build a computer and I am still learning more about each component.'
        },
        {
          image:'https://i.postimg.cc/JnLxwmHc/Mashalino.jpg',
          name: 'Mashalino',
          aboutMe:'My passion for computers started when I was 12 years old.I have learnt the knowledge to build a computer and I am still learning more about each component.'
        },
        {
          image:'https://i.postimg.cc/QC6JWT40/Ridhaa.jpg',
          name: 'Ridhaa',
          aboutMe:'My passion for computers started when I was 12 years old.I have learnt the knowledge to build a computer and I am still learning more about each component.'
        },
        {
          image:'https://i.postimg.cc/Df5gN9vL/Saleem.jpg',
          name: 'Saleem',
          aboutMe:'My passion for computers started when I was 12 years old.I have learnt the knowledge to build a computer and I am still learning more about each component.'
        }
      ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

