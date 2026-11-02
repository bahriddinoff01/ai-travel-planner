import LegalPage from './LegalPage'

const Terms = () => (
  <LegalPage
    title="Terms"
    updated="November 2026"
    intro="TravelAI is a free student project built for the Web Programming course at Gachon University. By using it you agree to these simple terms."
    sections={[
      {
        heading: 'Plans are suggestions',
        body: [
          'Itineraries and budgets are written by AI and may be incomplete or out of date. Always check opening hours, prices, visas and safety information before you travel.',
        ],
      },
      {
        heading: 'Your account',
        body: [
          'Keep your password private. You are responsible for activity on your account. Please do not use the service for anything illegal or to overload it.',
        ],
      },
      {
        heading: 'Availability',
        body: [
          'TravelAI is a learning project and may change, pause or lose data without notice. We provide it as it is, without guarantees.',
        ],
      },
    ]}
  />
)

export default Terms
