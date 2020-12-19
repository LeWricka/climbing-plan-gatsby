import React from 'react'
import { Helmet } from 'react-helmet'
import SimpleAccordion from '../components/climbing_plan/SimpleAccordion'
import NavBar from '../modules/sections/NavBar'
import styles from './blog.module.css'
import FaqHero from '../components/climbing_plan/FaqHero'

const faqs = [
  { title: 'How does climbingPlan work?', contents: ['1. We carry out an assessment to know your necessities and prepare a personalised training.\n 2. Our algorithm prepares a personalised training program for you, we revise it and send it to you asap to your email in a pdf filetype which you could print or take everywhere.\n'
    +'Please note that all our exercises are based on evidence based studies and our own climbing experience!'] },
  { title: 'What equipment do I need for this training program?', contents: [
      'This training program adapts to your available equipment, it is a personalised training plan. However, our database is full of more than 200 exercises using the bellow equipment:\n',
      '1. Pull Up Bar\n 2. Hangboard\n 3. Campus Board\n 4. Lead wallBoulder wall\n 5. Kettle Bells\n 6. Rins\n 7. Medicine Balls\n 8. Dumbbells or homemade alternative\n' +
      '9. Load\n 10. Resistance bands\n 11. Trx or similar\n 12. Boulder wall\n'
] },
  { title: 'Can I download the course? In which format do I get it?', contents: ['We send you the training by email in pdf file type. Apart from that, we will send you the training handbook in pdf an google sheets filetype so that you can monitor your progression.'] },
  { title: 'What are the requirements?', contents: ['' +
    'Avoid training while you are injured, always follow the instructions of a doctor or a physiotherapist.\n' +
    'Be older than 18 years old.\n' +
    'Have climbed before.'] },
  { title: 'What is the best climbing training?', contents: ['The most important element to any training regimen is that it must not cause injury. Each climber is unique and must train according to their needs, potential, goals and will. It is not worth taking any planning and executing it strictly. When planning your training, try to focus on your weaknesses. ClimbingPlan offers you the tools to get am evidence based personalised climbing training.'] },
  { title: 'Why should I train?', contents: ['To enjoy more when you climb outdoors.\n' +
    'To create a greater ability to climb.\n' +
    'To climb with more people.\n' +
    'To get out of your comfort zone.\n' +
    'To prevent injuries.\n' +
    'To improve your weaknesses and maintain your strengths.\n' +
    'Improve technique.'] },
  { title: 'For how long should I train?', contents: ['When you pick the program\'s end date, that\'s the period you want to peak for. It could be a trip, a rock climbing spring season or even a competition. The program \'s goal is to space the various training periods in a way that maximizes your gains for that particular date. Typically this is achieved in cycles.\n\n' +
    'The climbing cycles that we propose at climbingPlan vary depending on the goal that you are pursuing. During the assessment you could choose among  power training, endurance, powerendurance, core or an allin training.'] },
  { title: 'What is the time commitment for each week and workout?', contents: ['You can customize the weekly routine to your own everyday life. This is why we ask you in the assessment your available days and time. ClimbingPlan offers a 100% personalized training program to achieve your goal.'] },
  { title: 'What does the program cover?', contents: ['The program gives you a 4 week detailed training to achieve your climbing goals. It provides a weekly planning with a complete day to day exercises description. We provide you with the type of exercise, sets, reps, timing, method, images and variations.  Always adapted to your equipment and goals. Apart from that we provide you with a training handbook where you can monitor your progress.'] },
  { title: 'How much should I rest? Am I overtraining?', contents: ['Remember that the most important element to any training regimen is that it must not cause injury. If it hurts, don’t do it. Listening to the body is extremely necessary to prevent overworkout. Fail being  cautionary when you are more tired than usual +   Small differences in your daily sleep habits + stress + diet will leave you at risk of injury. It is important to find the training balance as much as you can while still being confident that you are safe from injuries.\n' +
    'Since its such a personal matter, an easy way of determining it is difficult to give. Missing a day of your training plan in the sense of a whole season is really nothing. However injuries are!  This is particularly true because tired, lowquality trainings won´ t always be very effective.\n' +
    'Moreover, if you are injured, then do something about it! Don’t mope around complaining about it, get a deep tissue massage, or go see a doctor or physical therapist.'] },
  { title: 'How to prevent handboard injuries?', contents: ['A good warmup is essential.\n' +
    'Never start full crimping.\n' +
    'Avoid swinging, put your center of mass under the edge of the hangboard.\n' +
    'Lift your feet slowly\n' +
    'Do not extend your neck, not shrugging.\n' +
    'Keep your shoulders low and tight\n' +
    'Avoid spreading your elbows.\n' +
    'Do not raise your legs.\n' +
    'Take such "not to do" as signs of fatigue, and that you are entering the muscle breakdown zone, increasing your risk of injury'] },
  { title: 'Bouldering for lead climbing?', contents: ['Bouldering is important for lead climbing . Never let the alpine climber tell you otherwise. Once the hardest boulder you can do rises, all movements under it come more easily in grade than before. By increasing your bouldering power, you too can become a stronger route climber.'] },
  { title: 'What is the use of the training handbook?', contents: ['Keeping a training journal helps keeping track of your progression.'] },
]

class FaqIndex extends React.Component {
  render() {
    return (
      <div>
        <NavBar threshold={200} />
        <FaqHero className={styles.hero} />
        <Helmet title={'ClimbingPlan'} />
        <SimpleAccordion faqs={faqs} />
      </div>
    )
  }
}

export default FaqIndex
