import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        isStop,
        stopCountdown,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                        className={`${styles.countdownButton} ${styles.countdownButtonActive} ${styles.countdownButtonStop}`}
                        onClick={stopCountdown}>
                            Parar
                        </button>
                    ) : (
                        <>
                            { isStop ? (
                                <div className={styles.countdownButtonContainer}>
                                    <button
                                    type="button"
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                    onClick={startCountdown}>
                                        Retomar ciclo
                                    </button>
                                    <button
                                    type="button"
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                    onClick={resetCountdown}>
                                        Abandonar ciclo
                                    </button>
                                </div>
                            ) : (
                                <button
                                type="button"
                                className={styles.countdownButton}
                                onClick={startCountdown}>
                                    Iniciar um ciclo
                                </button>
                            )}      
                        </>
                    )}      
                </>
            )}
        </div>
    )
}