import { City } from '../hooks/useCityWeather'

export const getLocale = () => {
  const { locale } = new Intl.DateTimeFormat().resolvedOptions()
  return locale
}

// Outputs 24 hour timestamp: (i.e. 04:24, 18:36)
export const toHumanReadableTime = (timestamp: number, city: City) => {
  const { locale } = new Intl.DateTimeFormat().resolvedOptions()
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    timeZone:
      city === 'Bogota'
        ? 'America/Bogota'
        : city === 'Lisbon'
        ? 'Europe/Lisbon'
        : city === 'Shanghai'
        ? 'Asia/Shanghai'
        : undefined,
  }).format(new Date(timestamp * 1000)) // Don't forget to multiply the UNIX timestamp by 1000
}
