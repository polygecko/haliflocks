import styles from './page.module.css';

export const metadata = {
  title: 'Games',
};

export default function GamesPage() {
  return (
    <main className={styles.body}>
      <div className={styles.glow} />

      <div className={styles.container}>
        <h1 className={styles.heading}>Games</h1>
        <div className={styles.divider} />

        <p className={styles.intro}>
          Stuck indoors with no birds around? Having some friends over and want to have some fun
          and test your knowledge about birds? Try out the below games on your laptop or mobile.
        </p>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Birdle</h2>
          <p className={styles.cardDesc}>
            Fan of the famous NYTimes Wordle but looking for a birder spin? Play one of the many
            iterations of Birdle! Provide feedback to help build the new and improved HaliFlocks
            brand Birdle.
          </p>
          <a
            href="https://claude.ai/public/artifacts/2500e15a-14f4-41f1-9d5e-637e8513f249?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPZs35leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacLmSxU9O6cJeM-X9EyDgDnn_VjvWt01OeK5LB3sTCw3eTsOXC2eo5pI8nAOA_aem_6KaqqhGv4a0pAru_8Z7CVA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            Play Birdle →
          </a>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>HaliFlocks SuDucko</h2>
          <a
            href="https://claude.ai/public/artifacts/39936192-37bb-4868-9693-6f9cefcbb49c"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            Play SuDucko →
          </a>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Birder Mystery Table Tap Game</h2>
          <p className={styles.cardDesc}>
            Birder Mystery engages you and your friends as a team of detectives charged with
            identifying the specific birds that have committed heinous crimes! This is a HaliFlocks
            original production and requires some facilitation to ensure the mystery unfolds in an
            engaging way. Get in touch if you are interested in solving any of the below{' '}
            <i><b>Birder Mysteries</b></i>!
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Other Birdles</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="https://www.play-birdle.com/world/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                play-birdle.com/world →
              </a>
            </li>
            <li>
              <a href="https://start.birdle.world/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                start.birdle.world →
              </a>
            </li>
            <li>
              <a href="https://www.birdlegame.com/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                birdlegame.com →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
