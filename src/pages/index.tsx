// Layout figma: https://www.figma.com/file/Xuh07UCERh8fixVziwCOqg/Move.it-1.0-(Copy)?node-id=160%3A2761
// focopraticagrupo
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"

import styles from '../styles/pages/Home.module.css'
import { ChallengesContextProvider } from '../contexts/ChallengeContext';

export default function Home(props){
  return (
    <ChallengesContextProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Inicio | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}