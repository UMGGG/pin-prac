import Image from 'next/image'
import style from "../../styles/login.module.css"

export default function Home(){
	return(
	  <div className={style.container}>
		<div className={style.logo}>
			<h1>Pin together</h1>
			<Image
			src="/images/dummy_logo.png"
			alt="logo image"
			width={50}
			height={50}
			/>
		</div>
		<div className={style.buttons}>
			<button style={{backgroundColor: '#2DB400'}} className={style.button}>네이버 로그인</button>
			<button style={{backgroundColor: '#FEE500'}} className={style.button}>카카오 로그인</button>
			<button style={{backgroundColor: '#4285F4'}} className={style.button}>구글 로그인</button>
		</div>
	  </div>
	)
  }
