//import useSwr from 'swr'
import Link from 'next/link'
//import axios from "axios";

//const fetcher = url => axios.get(url).then(res => res.data);
//const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  //const { data, error } = useSwr('/api/users', fetcher)
  //const { data, error } = useSwr('https://swapi.dev/api/planets/', fetcher)

//    if (error) return <div>Failed to load users</div>
//    if (!data) return <div>Loading...</div>
//    console.log('data:', data);

  return (
    <ul>
      <li key={"chart"}>
        <Link href="/user/chart" >
            <a>{`Chart`}</a>
          </Link>
      </li>
      <li key={"post"}>
        <Link href="/user/empRoute" >
            <a>{`Post`}</a>
          </Link>
      </li>
    </ul>
  )
}
