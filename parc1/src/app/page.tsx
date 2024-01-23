"use client"

import {
	useRouter,
} from 'next/navigation'

export default function main(){
  const router = useRouter();
  return(
    <div>
      <h1>Home</h1>
      <button onClick={ () => router.push("/login")}>로그인</button>
    </div>
  )
}
