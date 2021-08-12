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
//       {data.map((user) => (
//         <li key={user.id}>
//           <Link href="/user/[id]" as={`/user/${user.id}`}>
//             <a>{`User ${user.id}`}</a>
//           </Link>
//         </li>
//       ))}
//        {data.results.map((user) => (
//         <li key={user.name}>
//           <Link href="/user/[id]" as={`/user/${user.name}`}>
//             <a>{`${user.name}`}</a>
//           </Link>
//         </li>
//       ))} 
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
