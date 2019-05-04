import * as topicsAPI from "./faceGenreService";

const tips = [
  {
    title: "Find the Why",
    topic: { _id: "1", name: "Planning" },
    summary:
      "When starting out any journey, it goes without saying that a destination is required before planning. When the journey gets difficult, it's the 'why' that keeps you going. It is also what inspires others along the way to join you."
  },
  {
    title: "Validate the Idea",
    topic: { _id: "1", name: "Planning" },
    summary:
      "It's easy to start an idea. Validating an idea is the first step in gaining a customer or advocate. It is not only essential but will be one of the first questions asked when approaching investors and start up influencers."
  },
  {
    title: "Pick a Language",
    topic: { _id: "5", name: "Coding" },
    summary:
      "One of the most confusing things about deciding to learn Coding is figuring out what language to learn. It can seem daunting because learning Coding is a lot of work. Once you start creating in one language, things get easier."
  },
  {
    title: "Github is awesome",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Github is not only a place to store Coding, it is a life saver with it's ability to save, revert, share, and more. With most developer working on github, it is a community for Codingrs. You can contribute to projects and learn."
  },
  {
    title: "Feeling Dumb goes with the territory?",
    topic: { _id: "5", name: "Coding" },
    summary:
      "During my journey I was questioning everything. I broke things, forgot what I had learned. Eventually, I was able to look around the room and see that it was just me and the computer. Time to check the self talk!"
  },
  {
    title: "Subscribers are awesome",
    topic: { _id: "2", name: "Money" },
    summary:
      "People who subscribe to something you offer are rewarding you, perhaps paying for use of your services or products. That's a huge bunch of awesomeness. It should be reciprocated with the best user experience possible."
  },
  {
    title: "Pomodoro Works!",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Pomodoro is named after an egg timer shaped like a tomato. It works. 25 minutes of work followed by a 5 minute break. It works! It forces you to chunk a task or a bunch of tasks. Why have a task master? Start your timer."
  },
  {
    title: "What is Protyping?",
    topic: { _id: "1", name: "Planning" },
    Summary:
      "I remember a day we were getting a new window as part of our home renovations. When the window came, it was hung over the eves, making for one disappointed guy when he came home. Everyone agreed we needed drawings."
  },
  {
    title: "Who's your tribe?",
    topic: { _id: "3", name: "People" },
    Summary:
      "Ever notice people you just relate to, want to be with, make the world a better place. Who cares? They do. You care about them. This is your tribe. You are building something better for them. They are your tribe."
  },
  {
    title: "Beyond Customers",
    topic: { _id: "5", name: "People" },
    summary:
      "Yes, the customer important. Along the road to getting to that customer are alot of influencers, both positive and negative. Navigating to success means getting beyond the customer to partners, advocates, and more."
  },
  {
    title: "Trust the big equalizer",
    topic: { _id: "5", name: "People" },
    summary:
      "If I could put one currency above money, it would be trust. Trust grows from the first impression in a website and grows or falls along the way. People don't like risk. I don't like risk. People are cautious. Internet is scary."
  },
  {
    title: "Continuous Deployment",
    topic: { _id: "5", name: "Coding" },
    summary:
      "I learned very quickly not to build something that no one can see. A simple website is easy to put on line but a site with a back end, database, and several API's is not easy to deploy. I have learned to deploy a simple page first. "
  },
  {
    title: "Demystifying Data",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Many people see data as daunting. It was for me. Data can be used to tell stories, predict things, even carry out tasks. The good news is data behaves the same way no matter the language or platform."
  },
  {
    title: "Creating content",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Content creates the voice and message behind the website. It should drive design, layout, and structure. Good content provides information, create credibilty and invite visitors to learn and inspire a call to action."
  },
  {
    title: "Failing is a Good Thing",
    topic: { _id: "1", name: "Planning" },
    summary:
      "The biggest risk is doing nothing. Creation begins with simple actions and consquences. With good intentions and learning, new beginnings, anything is possible. Failure can mean not achieving a goal, not defeat."
  },
  {
    title: "What is in a brand?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Much more than a logo, brand should reflect the personality, values, and substance behind a business. The best brands reach people at the heart and soul. Brands tell a story and direct the imagination."
  },
  {
    title: "Competitors are a good thing",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Competitors are a sign post for the market you are entering. If it's been done before, you could come up with something better or perhaps with some research competitors are actually partners or customers."
  },
  {
    title: "What's in a Business Model?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "It's not a dumb question to ask what is a business model. Many business owners don't actually think about it. It is more than a product and customer; it describes value, products, experience and money."
  },
  {
    title: "Why is Growth Important?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Growth doesn't have to mean size, revenue, or earnings but if you start a business without thinking about capacity and growth of products or sales, you may find yourself paying in employee retention or investment."
  },
  {
    title: "Why an Exit Strategy?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "An exit strategy can be like a cancellation contract or can be road map to allow a key partner or investor to transition in and out of a business. It reduces risk and uncertaintly and puts strategic focus on decisions."
  },
  {
    title: "Start Up Teams",
    topic: { _id: "1", name: "Planning" },
    summary:
      "How do you work on an idea with no money?  If you can deliver on a promise, money can be secondary. In every start up there is something to offer, be it experience, a green field start. The key is to deliver on it"
  },
  {
    title: "What makes you sweet?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Likeability, relevance, and reliability have sweet factor but can you be too sweet. With expectations and clarity, you offer substance to the deal. People, once drawn to an idea, naturally want to help and make a difference"
  },
  {
    title: "Shelf Life of an idea",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Everything has a shelf life. Product lifecycles follow user adoption, user adoption is dependant on alternative products or better ways. This is why empathy for a problem with many solutions lasts longer than a robust solution. "
  },
  {
    title: "Financials are not scary",
    topic: { _id: "2", name: "Money" },
    summary:
      "Many people seem to avoid the financials and look to an accountant or some financial person to deal with it. That's wrong. Like gasoline, or tire pressure, you need to have the indicators for a safe journey and enjoy the trip."
  },
  {
    title: "Women and Tech",
    topic: { _id: "5", name: "Coding" },
    summary:
      "One of my biggest surprizes was the lack of women coding. The further away from front end, it seems the fewer women. I push back when I hear a women say refer to themselves as not tech savvy, before event starting something."
  },
  {
    title: "Ask for Help",
    topic: { _id: "5", name: "Coding" },
    summary:
      "People love to help, especially if they feel like being part of some one's success. The best way to ask for help is to share your goal, explain what you have done, and ask for specific help. Your challenge may be someone's puzzle."
  },
  {
    title: "Avoid the Sleaze trap",
    topic: { _id: "2", name: "Money" },
    summary:
      "When your focus is money, and only money, you risk entering the sleaze trap. If you only want money, go to an ATM. If you want value, create it. The difference between a scam and a bad deal is the ability to resolve things."
  },
  {
    title: "What's in a Market?",
    topic: { _id: "1", name: "Planning" },
    summary:
      "It's not just wall street or the guy on TV talking about business news. It's any predictable group of people you can count on to behave a certain way. You can have a market of left handed bird watchers if they have a common need."
  },
  {
    title: "How much does it really cost?",
    topic: { _id: "2", name: "Money" },
    summary:
      "Total Cost of Ownership used to be a big industry term. How long does it last? what does it take to use it? Does it end up in a land fill? Do I need training? Who can I call if it breaks? These separate quality products from waste."
  },
  {
    title: "Iterate and iterate some more",
    topic: { _id: "1", name: "Planning" },
    summary:
      "I went to a Game Developer event and was fascinated by the post mortem stories explaining journeys of different companies. Of the games I knew well, none were what they started out but the best evolved after many iterations."
  },
  {
    title: "What I learned about Node",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Node.js was my first back end language. That was a mistake. At the time it was not at Version 1 and was just too much to take on for this beginner. How ever it's real time, asynchronous features with JavaScript have drawn me back."
  },
  {
    title: "What I learned about Python",
    topic: { _id: "5", name: "Coding" },
    summary:
      "I learned Python while first learning about code. Many learning resources used Python 2.6 while Python 3.3 was available. That threw me for a loop. Python is a must for machine learning and has an extensive libraries."
  },
  {
    title: "What I learned about Ruby",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Ruby is my favorite language for websites. Model View Controller with Rails helped me learn apps. Ruby has what feels like unlimited methods. For learning resources, there are many books and tutorials from beginner to advanced."
  },
  {
    title: "HTML is everywhere",
    topic: { _id: "5", name: "Coding" },
    summary:
      "HTML is the first step to learning websites, but if you look carefully, you'll see it on TV and movies in graphics. HTML is a starting point but the more other things I learn, I find my HTML gets better as I undersand how it fits."
  },
  {
    title: "Learning CSS",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Cascading Style Sheets (CSS) is what makes colors, fonts, and layout on a website. There are also a ton of templates and libraries with CSS built in. I like to look through sites and mimic them. CSS is the fun in websites."
  },
  {
    title: "Web Design",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Design is all about color, personality, key messages, and reflects brand. A good designer can bring the right energy to a website. SASS and LESS super charge CSS making use of font and color settings."
  },
  {
    title: "I'd Rather You build your own Site",
    topic: { _id: "1", name: "Planning" },
    summary:
      "The world of DIY, almost anyone can build a website, even for Free or very little. If you are starting out, just want to get something on line, don't hire a developer until you know what you need to build."
  },
  {
    title: "What's in a Website",
    topic: { _id: "1", name: "Planning" },
    summary:
      "A website can be a single page, or be as many pages as you want. Once you add a database and do things in the back end, it's usually an application. The amount of iteraction with users creates complexity."
  },
  {
    title: "The Call to Action",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Before you start a website, deciding what you want the site to do is the first step. What do you want the visitor to do. This is the call to action. Your site visitor can sign up, search, or more "
  },
  {
    title: "Daily Quests",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Having daily questions ties learning and reflecting into actions toward a goal. Daily quests can be based on fun curiosity or a way to chip at a daunting task"
  },
  {
    title: "How to ask Developer Help",
    topic: { _id: "5", name: "Coding" },
    summary:
      "When you get stuck on something, it's easy to get frustrated and wish someone would help you. Try to solve it, write down what you did and ask a specific question."
  },
  {
    title: "What I learned about Deploying",
    topic: { _id: "5", name: "Coding" },
    summary:
      "I found it much easier to deploy a single page and continuously deploy to a live site. There are many moving parts to get moving. Even better build, test, then deploy."
  },
  {
    title: "The Art of Data",
    topic: { _id: "2", name: "Coding" },
    summary:
      "Data can be used to create more data. Good programmers are not only lazy, meaning they find a way to automate, but also curious and play with data and do something."
  },
  {
    title: "Simple is Complex",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Ever noticed your favorite products or apps have very few screens, or buttons and seem intuitive. That is a very complex science of useability and design."
  },
  {
    title: "Social Media and Websites",
    topic: { _id: "3", name: "People" },
    summary:
      "One of the best places to collect community content is through social media. It can be a starting point for vetting an idea, collecting photos, and more."
  },
  {
    title: "Be Search Friendly",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Google wouldn't be google without giving googlers good answers to questions. Every page you write should have tags that lead searchers to your answer."
  },
  {
    title: "Breaks are Priceless",
    topic: { _id: "1", name: "Planning" },
    summary:
      "I have just returned from walking my dog. In the past I have solved questions, milled over a stressor, made decisions, or soaked in a concept."
  },
  {
    title: "Purge a Lot",
    topic: { _id: "1", name: "Planning" },
    summary:
      "I just purged 2 applications that I had spent more than 2 years working on. It was holding me back from doing more. When I'm stuck, I purge. "
  },
  {
    title: "What about Investors",
    topic: { _id: "2", name: "Money" },
    summary:
      "Not all businesses can be bootstrapped so you may need investors. First tip, what are you asking for? Look for a collaborator not money."
  },
  {
    title: "Stories connect",
    topic: { _id: "3", name: "People" },
    summary:
      "Stories instill feelings and memories, which have meaning and are less likely to be forgotten. Stories form communities."
  },
  {
    title: "Photo's and Images on a website",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Find the best size and shape and background. There are so many free cropping tools, making it easy. "
  },

  {
    title: "Trying out Lean Canvas",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Lean Canvas when used as a reference can be translated into a twenty minute overview of a product idea. "
  },
  {
    title: "Measure your Success",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Measure twice, cut once applies to more than building. Measuring shows progress. As you learn, measure more."
  },
  {
    title: "Games are every where",
    topic: { _id: "1", name: "Planning" },
    summary:
      "Instant gratification happens when someone does something and gets a gratification. That can happen in an app."
  },
  {
    title: "Recruiters, Friend or Foe",
    topic: { _id: "5", name: "People" },
    summary:
      "Getting a call or message saying I have a friend looking for a ruby developer for 3 months is a signal to ignore"
  },
  {
    title: "Use events to Time Box",
    topic: { _id: "4", name: "Time" },
    summary:
      "Procrastination is common. By making an event, it could be a major one or just you and a friend. Then prepare something."
  },
  {
    title: "Digital Ocean versus Heroku",
    topic: { _id: "5", name: "Coding" },
    summary:
      "My preference is Digital Ocean because I can see what is in the server, understand the costs and use open source software. "
  },
  {
    title: "What is an API",
    topic: { _id: "5", name: "Coding" },
    summary:
      "This is not a dumb question. For me an API means I am using more than one application with the same data."
  },
  {
    title: "Why is React so Hard to Learn",
    topic: { _id: "5", name: "Coding" },
    summary:
      "I am learning react after learning Rails. React is hard since it uses javaScript to make front end act like back end."
  },
  {
    title: "MVC and how it helped me learn",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Models talk to data. Controllers talk to files and Views render HTML. That's my simple view of MVC."
  },
  {
    title: "How I built this site",
    topic: { _id: "5", name: "Coding" },
    summary:
      "I wanted to create a site with no data, yet make it interactive. I created a site using react."
  },
  {
    title: "Friendly Road Project",
    topic: { _id: "5", name: "Coding" },
    summary:
      "Friendlyroad.com was my first rails site. It is built as a collaboration site for sharing ideas."
  },
  {
    title: "Creative Calgary Project",
    topic: { _id: "5", name: "Coding" },
    summary:
      "CreativeCalgary.ca was a collection of interesting places events and people across the city."
  },
  {
    title: "Eklectic Market Project",
    topic: { _id: "5", name: "Coding" },
    summary:
      "EklecticMarket.com was a marketplace site. Users could set their own monthly payments."
  },
  {
    title: "Testing as a habit",
    topic: { _id: "5", name: "Coding" },
    summary:
      "As an old PM, I love the idea of testing before building; a habit worth setting."
  }
];

export function getTips() {
  return tips;
}
export function getTip(id) {
  return tips.find(m => m._id === id);
}
