export default function (customer) {
  return !customer.delinquent && !!customer.default_source
}
