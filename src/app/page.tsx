import Header from '@/components/header'
import MainForm from '@/components/mainForm'
import Navbar from '@/components/navbar'
import ToastClient from '@/components/toastClient'

export const revalidate = 60

export default async function Home() {
	return (<>
		<div className='min-h-screen flex flex-col'>
			<div className='dark:bg-gradient-to-bl from-transparent via-slate-900 from-0% via-30% to-60% absolute -z-50 w-full h-full' />
			<Navbar />
			<Header />
			<MainForm />
			<ToastClient />
		</div>
	</>
	)
}
