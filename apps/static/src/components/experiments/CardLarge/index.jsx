// import styles from './styles';
import {Modal} from '@horizin/design-system-organisms';

const styles = {
  cover: {
    bg: 'blue',
    color: 'white',
    flex: 4,
    width: '35%',
    px: 3,
  },
  main: {
    flex: 12,
    m: 0,
    p: 4,
    width: '65%',
  },
  coverImage: {
    opacity: 0.6,
  },
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },

  content: {
    flex: 5,
  },
  leaderboard: {
    flex: 3,
    p: 3,
  },
  badge: {
    borderRadius: 99999,
    boxShadow: 1,
    maxWidth: 70,
    width: '100%',
  },
  button: {
    width: '100%',
    mt: 3,
  },
};

export const CardLarge = ({
  title,
  subtitle,
  summary,
  image,
  label,
  action,
  ...props
}) => {
  return (
    <Atom.Flex sx={props.sx}>
      <Atom.Flex center column sx={styles.cover}>
        <Atom.BackgroundGradient
          gradient={props.gradient || 'blue'}
          // src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
          sx={styles.coverImage}
        />
        <Atom.Span>
          <Atom.Image sx={styles.badge} src={image} />
        </Atom.Span>
      </Atom.Flex>

      <Atom.Flex column card sx={styles.main}>
        <Atom.Flex>
          <Atom.Box sx={styles.content}>
            <Atom.Heading xxl>{title}</Atom.Heading>
            <Atom.Paragraph>{subtitle}</Atom.Paragraph>
            <Atom.Paragraph>{summary}</Atom.Paragraph>
          </Atom.Box>
          <Atom.Flex center column sx={styles.leaderboard}>
            <Atom.Button m1 white>
              Get Started
            </Atom.Button>
            {/* <Atom.Box sx={styles.buttonContainer}>
              <Modal content={props.content}>
                <Atom.Button sx={styles.button}>{label}</Atom.Button>
              </Modal>
            </Atom.Box> */}
            {/* <Atom.Button m1>View Documentation</Atom.Button> */}
          </Atom.Flex>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default CardLarge;
