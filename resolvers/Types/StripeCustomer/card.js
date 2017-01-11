export default function (customer) {
  const defaultCard = customer.default_source
  for (const card of customer.sources.data) {
    if (card.id === defaultCard) {
      return card
    }
  }
}
