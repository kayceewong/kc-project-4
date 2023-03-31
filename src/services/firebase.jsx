import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBMRBxiBNtaIjJxq1X9cGP2The5KU91nAs',
  authDomain: 'kc-project-4.firebaseapp.com',
  projectId: 'kc-project-4',
  storageBucket: 'kc-project-4.appspot.com',
  messagingSenderId: '865044722121',
  appId: '1:865044722121:web:a7ae80b2f7ea70888cf818',
  measurementId: 'G-53Z8LNLS2H'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { analytics }
export default app
