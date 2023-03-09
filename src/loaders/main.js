import {fetchData} from '../helpers'

// loader
const mainLoader = () => {
  const userName = fetchData('userName')
  return {userName}
}

export default mainLoader
