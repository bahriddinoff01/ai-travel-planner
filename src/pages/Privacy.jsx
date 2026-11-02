import LegalPage from './LegalPage'

const Privacy = () => (
  <LegalPage
    title="Privacy"
    updated="November 2026"
    intro="TravelAI is a student project from Gachon University. This page explains what information the app uses and why."
    sections={[
      {
        heading: 'What we collect',
        body: [
          'When you sign up we store your username, email and password in our database so you can log in.',
          'When you create a plan, the choices you make (destination, days, budget, interests and food preferences) are sent to our server to generate the itinerary.',
        ],
      },
      {
        heading: 'How plans are created',
        body: [
          'Your trip choices are sent to OpenAI to write the itinerary. We do not send your password or email with them.',
        ],
      },
      {
        heading: 'What stays in your browser',
        body: [
          'Your login token, theme choice, saved plans and favorites are kept in your browser’s local storage. You can remove saved plans at any time from Settings, or by clearing your browser data.',
        ],
      },
      {
        heading: 'Sharing',
        body: ['We do not sell or share your information with anyone else. TravelAI has no ads or trackers.'],
      },
    ]}
  />
)

export default Privacy
